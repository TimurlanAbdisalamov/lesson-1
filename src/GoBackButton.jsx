
import { useNavigate } from 'react-router-dom';

function GoBackButton() {
    const navigate = useNavigate(); 

    const handleGoBack = () => {
        navigate(-1); 
    };

    return (
        <div className="go-back-button-container">
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
}

export default GoBackButton;
