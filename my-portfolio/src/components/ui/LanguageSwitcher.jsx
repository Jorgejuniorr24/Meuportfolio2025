const LanguageSwitcher = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="w-6 h-6">
        <img src="/brazil-flag.svg" alt="Português" className="w-full h-full" />
      </button>
      <button className="w-6 h-6">
        <img src="/usa-flag.svg" alt="English" className="w-full h-full" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;