const ServiceItem = ({ icon: Icon, title, color }) => (
  <div className="service-item">
    <Icon className="service-icon" size={24} />
    <span>{title}</span>
  </div>
);

export default ServiceItem;