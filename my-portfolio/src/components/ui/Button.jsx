const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border border-gray-800 text-gray-800 hover:bg-gray-50'
  };
  
  return (
    <button
      className={`rounded-lg font-medium transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;