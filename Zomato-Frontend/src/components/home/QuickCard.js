// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const QuickCard = ({ image, title, description }) => {
  return (
    <div className="quick-card" onClick={() => alert("Hello from here")}>
      <img src={image} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default QuickCard;
