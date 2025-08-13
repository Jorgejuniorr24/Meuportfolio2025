import React, { useState, useCallback, useMemo } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import { useI18n } from "../../contexts/I18nContext";

/* -------------------- Validações -------------------- */
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => {
  const cleanPhone = phone.replace(/\D/g, "");
  return cleanPhone.length >= 10 && cleanPhone.length <= 15;
};
const formatPhone = (value) => {
  const cleaned = value.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : value;
};

/* -------------------- Campo de Formulário -------------------- */
const FormField = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  rows,
  className = "",
}) => {
  const baseClasses = `
    w-full p-4 rounded-lg shadow-sm
    bg-white dark:bg-gray-800
    text-base text-slate-800 dark:text-white
    placeholder:text-slate-400 dark:placeholder:text-slate-300
    border-2 border-slate-300 dark:border-slate-700
    focus:outline-none focus:shadow-lg
    transition-all duration-200 ease-in-out
  `.replace(/\s+/g, " ");

  const stateClasses = error
    ? "focus:ring-2 focus:ring-red-400 dark:focus:ring-red-500 border-red-400 dark:border-red-500"
    : "focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent";

  const Component = type === "textarea" ? "textarea" : "input";

  return (
    <div className={className}>
      <Component
        type={type !== "textarea" ? type : undefined}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        rows={type === "textarea" ? rows : undefined}
        className={`${baseClasses} ${stateClasses} ${
          type === "textarea" ? "resize-none" : ""
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <div
          id={`${name}-error`}
          className="mt-2 flex items-center text-red-600 dark:text-red-300 text-sm"
          role="alert"
        >
          <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
          {error}
        </div>
      )}
    </div>
  );
};

/* -------------------- Card de Contato -------------------- */
const ContactIcon = ({
  icon: Icon,
  title,
  subtitle,
  href,
  bgColor = "bg-indigo-600",
  hoverColor = "hover:text-indigo-600 dark:hover:text-indigo-400",
}) => {
  const content = (
    <div
      className={`text-center ${
        href ? hoverColor : ""
      } transition-colors duration-200`}
    >
      <div
        className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-shadow duration-200`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <p className="text-base font-semibold text-slate-800 dark:text-white mb-1">
        {title}
      </p>
      <p
        className={`text-sm text-slate-600 dark:text-white ${
          href
            ? "underline decoration-transparent hover:decoration-inherit"
            : ""
        }`}
      >
        {subtitle}
      </p>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block"
    >
      {content}
    </a>
  ) : (
    content
  );
};

/* -------------------- Página de Contato -------------------- */
export default function ContactPage() {
  const { t } = useI18n();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = useCallback(
    (name, value) => {
      switch (name) {
        case "firstName":
          return value.trim().length < 2
            ? t("contact.form.errors.firstName")
            : "";
        case "lastName":
          return value.trim().length < 2
            ? t("contact.form.errors.lastName")
            : "";
        case "email":
          if (!value.trim()) return t("contact.form.errors.emailRequired");
          return !validateEmail(value)
            ? t("contact.form.errors.emailInvalid")
            : "";
        case "phone":
          if (!value.trim()) return t("contact.form.errors.phoneRequired");
          return !validatePhone(value)
            ? t("contact.form.errors.phoneInvalid")
            : "";
        case "message":
          return value.trim().length < 10
            ? t("contact.form.errors.message")
            : "";
        default:
          return "";
      }
    },
    [t]
  );

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      const formattedValue = name === "phone" ? formatPhone(value) : value;
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));

      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: validateField(name, formattedValue),
        }));
      }
    },
    [errors, validateField]
  );

  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    },
    [validateField]
  );

  const isFormValid = useMemo(() => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "message",
    ];
    const hasAll = requiredFields.every((f) => formData[f].trim());
    const noErrors = Object.values(errors).every((e) => !e);
    return hasAll && noErrors;
  }, [formData, errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((r) => setTimeout(r, 2000));
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      setSubmitStatus("error");
      console.error("Erro ao enviar formulário:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0B1120] dark:to-[#1a2332] p-4 sm:p-8 transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t("contact.pageTitle")}
          </h1>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulário */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center text-green-800 dark:text-green-200 text-sm">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>{t("contact.success")}</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center text-red-800 dark:text-red-200 text-sm">
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>{t("contact.error")}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    name="firstName"
                    placeholder={t("contact.form.firstName")}
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.firstName}
                    required
                  />
                  <FormField
                    name="lastName"
                    placeholder={t("contact.form.lastName")}
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.lastName}
                    required
                  />
                </div>

                <FormField
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  required
                />
                <FormField
                  type="tel"
                  name="phone"
                  placeholder={t("contact.form.phone")}
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone}
                  required
                />
                <FormField
                  type="textarea"
                  name="message"
                  placeholder={t("contact.form.message")}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.message}
                  rows="5"
                  required
                />

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full p-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-500 dark:to-indigo-600 text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>{t("contact.form.sending")}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t("contact.form.send")}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 text-center">
                {t("contact.otherContact")}
              </h2>

              <div className="space-y-8">
                <ContactIcon
                  icon={MapPin}
                  title={t("contact.location")}
                  subtitle={t("contact.locationValue")}
                  bgColor="bg-slate-600"
                />
                <ContactIcon
                  icon={Mail}
                  title={t("contact.email")}
                  subtitle="jorge.juniortwo@hotmail.com"
                  href="mailto:jorge.juniortwo@hotmail.com"
                  bgColor="bg-indigo-600"
                />
                <ContactIcon
                  icon={Phone}
                  title={t("contact.whatsapp")}
                  subtitle="(+55) 71 99289-6908"
                  href="https://wa.me/5571992896908"
                  bgColor="bg-emerald-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
