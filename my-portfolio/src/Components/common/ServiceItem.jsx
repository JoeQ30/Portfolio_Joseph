const ServiceItem = ({ icon: Icon, title, color }) => (
  <div className="flex items-center space-x-3">
    <Icon className={`text-${color}-400`} size={24} />
    <span>{title}</span>
  </div>
);

export default ServiceItem;