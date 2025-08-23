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

/* -------------------- Item do Card de Contato -------------------- */
const ContactItem = ({
  icon: Icon,
  title,
  subtitle,
  href,
  bgColor = "bg-indigo-600",
}) => {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? {
        href,
        target: href.startsWith("http") ? "_blank" : undefined,
        rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
        "aria-label": title,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group block text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
    >
      <div className="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-200">
        <div
          className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>

      <p className="text-base font-semibold text-slate-800 dark:text-slate-100">
        {title}
      </p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        {subtitle}
      </p>
    </Wrapper>
  );
};

/* -------------------- Página de Contato -------------------- */
export default function ContactPage() {
  const { t, language } = useI18n();

  // Helper de tradução com fallback quando a chave não existe
  const tr = React.useCallback(
    (key, fallback) => {
      const val = t(key);
      return val === key ? fallback : val;
    },
    [t]
  );

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

  // Textos i18n
  const i18nText = {
    // Título/descrição da página
    pageTitle: tr(
      "contact.pageTitle",
      language === "en" ? "Get in touch" : "Entre em Contato"
    ),
    pageDescription: tr(
      "contact.pageDescription",
      language === "en"
        ? "Contact me to start your project or ask questions."
        : "Fale comigo para iniciar seu projeto ou tirar dúvidas."
    ),
    // Placeholders
    firstNamePh: tr(
      "contact.form.firstName",
      language === "en" ? "First name *" : "Nome *"
    ),
    lastNamePh: tr(
      "contact.form.lastName",
      language === "en" ? "Last name *" : "Sobrenome *"
    ),
    emailPh: tr(
      "contact.form.email",
      language === "en" ? "Your email" : "Email *"
    ),
    phonePh:
      language === "en"
        ? tr("contact.form.phone", "Phone * (e.g., +1 555 123-4567)")
        : tr("contact.form.phone", "Telefone * (ex: (71) 99999-9999)"),
    messagePh: tr(
      "contact.form.message",
      language === "en"
        ? "Your message"
        : "Mensagem * (descreva seu projeto ou dúvidas)"
    ),
    // Botões/estados
    send: tr("contact.form.send", language === "en" ? "Send" : "Enviar"),
    sending: tr(
      "contact.form.sending",
      language === "en" ? "Sending..." : "Enviando..."
    ),
    successMsg: tr(
      "contact.form.success",
      language === "en"
        ? "Message sent successfully! We'll get back to you soon."
        : "Mensagem enviada com sucesso! Entraremos em contato em breve."
    ),
    errorMsg: tr(
      "contact.form.error",
      language === "en"
        ? "Error sending message. Please try again."
        : "Erro ao enviar mensagem. Tente novamente."
    ),
    // Card lateral (agora 100% i18n)
    otherContactsTitle: tr(
      "contact.social.title",
      language === "en" ? "Other contact options" : "Outras formas de contato"
    ),
    locationTitle: tr(
      "contact.info.locationTitle",
      language === "en" ? "Location" : "Localização"
    ),
    locationValue: tr(
      "contact.info.location",
      language === "en"
        ? "Salvador - Bahia - Brazil"
        : "Salvador - Bahia - Brasil"
    ),
    emailTitle: tr(
      "contact.info.emailTitle",
      language === "en" ? "Email" : "Email"
    ),
    whatsappTitle: tr("contact.info.whatsappTitle", "WhatsApp"),
  };

  // Mensagens de validação traduzidas
  const v = {
    min2:
      language === "en"
        ? "Must be at least 2 characters"
        : "Deve ter pelo menos 2 caracteres",
    emailRequired:
      language === "en" ? "Email is required" : "Email é obrigatório",
    emailInvalid: language === "en" ? "Invalid email" : "Email inválido",
    phoneRequired:
      language === "en" ? "Phone is required" : "Telefone é obrigatório",
    phoneInvalid: language === "en" ? "Invalid phone" : "Telefone inválido",
    msgMin10:
      language === "en"
        ? "Message must be at least 10 characters"
        : "Mensagem deve ter pelo menos 10 caracteres",
  };

  const validateField = useCallback(
    (name, value) => {
      switch (name) {
        case "firstName":
        case "lastName":
          return value.trim().length < 2 ? v.min2 : "";
        case "email":
          if (!value.trim()) return v.emailRequired;
          return !validateEmail(value) ? v.emailInvalid : "";
        case "phone":
          if (!value.trim()) return v.phoneRequired;
          return !validatePhone(value) ? v.phoneInvalid : "";
        case "message":
          return value.trim().length < 10 ? v.msgMin10 : "";
        default:
          return "";
      }
    },
    [v]
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

  // ✨ INTEGRAÇÃO COM FORMSPREE ✨
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação dos campos
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
      // Preparar dados para o Formspree
      const formPayload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        // Campos extras para organização
        firstName: formData.firstName,
        lastName: formData.lastName,
        // Adicionar idioma para contexto
        language: language,
      };

      // Enviar para o Formspree
      const response = await fetch("https://formspree.io/f/mjkonldq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Limpar formulário após sucesso
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitStatus("error");
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
            {i18nText.pageTitle}
          </h1>
          {i18nText.pageDescription && (
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {i18nText.pageDescription}
            </p>
          )}
        </header>

        {/* Mensagens de Status */}
        {submitStatus && (
          <div className="mb-6">
            {submitStatus === "success" && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <p className="text-green-800 dark:text-green-200">
                    {i18nText.successMsg}
                  </p>
                </div>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <p className="text-red-800 dark:text-red-200">
                    {i18nText.errorMsg}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* GRID: itens esticam para igualar altura */}
        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          {/* Coluna do Formulário (2 colunas) */}
          <div className="lg:col-span-2 flex h-full">
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 flex flex-col h-full w-full">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6 flex-1 flex flex-col"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    name="firstName"
                    placeholder={i18nText.firstNamePh}
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.firstName}
                    required
                  />
                  <FormField
                    name="lastName"
                    placeholder={i18nText.lastNamePh}
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
                  placeholder={i18nText.emailPh}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  required
                />
                <FormField
                  type="tel"
                  name="phone"
                  placeholder={i18nText.phonePh}
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone}
                  required
                />
                <FormField
                  type="textarea"
                  name="message"
                  placeholder={i18nText.messagePh}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.message}
                  rows="5"
                  required
                />

                <div className="mt-auto">
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full p-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-500 dark:to-indigo-600 text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        <span>{i18nText.sending}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>
                          {language === "en"
                            ? "Send message"
                            : "Enviar Mensagem"}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Card "Outras formas de contato" (100% i18n) */}
          <div className="flex h-full">
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col h-full w-full">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6 text-center">
                {i18nText.otherContactsTitle}
              </h2>

              <div className="flex-1 flex flex-col justify-center gap-10">
                <ContactItem
                  icon={MapPin}
                  title={i18nText.locationTitle}
                  subtitle={i18nText.locationValue}
                  bgColor="bg-slate-600"
                />

                <ContactItem
                  icon={Mail}
                  title={i18nText.emailTitle}
                  subtitle="jorge.juniortwo@hotmail.com"
                  href="mailto:jorge.juniortwo@hotmail.com"
                  bgColor="bg-indigo-600"
                />

                <ContactItem
                  icon={Phone}
                  title={i18nText.whatsappTitle}
                  subtitle="(+55) 71 99289-6908"
                  href="https://wa.me/5571992896908"
                  bgColor="bg-emerald-600"
                />
              </div>
              <div className="pt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
