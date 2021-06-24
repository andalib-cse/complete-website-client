import hearCut from '../../../../../img/services/hearCut.png';
import makeUp from '../../../../../img/services/makeUp.png';
import manicure from '../../../../../img/services/manicure.png';
import pedicure from '../../../../../img/services/pedicure.png';
import hearColor from '../../../../../img/services/hearColor.png';
import facial from '../../../../../img/services/facial.png';

const SingleService = ({ info }) => {

    const { serviceName, status } = info;

    let contextImg;
    if (serviceName === 'HearCut') {
        contextImg = hearCut;
    } else if (serviceName === 'MakeUp') {
        contextImg = makeUp;
    } else if (serviceName === 'Manicure') {
        contextImg = manicure;
    } else if (serviceName === 'Pedicure') {
        contextImg = pedicure;
    } else if (serviceName === 'HairColor') {
        contextImg = hearColor;
    } else if (serviceName === 'Facial') {
        contextImg = facial;
    }

    let statusColor;
    if (status === 'Done') {
        statusColor = 'done';
    } else if (status === 'Pending') {
        statusColor = 'pending';
    } else {
        statusColor = 'on_going';
    }

    return (
        <div className="service_box">

            <div className="service_status">
                <img src={contextImg} alt="" />
                <button className={`status ${statusColor}`}>{status}</button>
            </div>

            <div className="service_info">
                <h4>{serviceName}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi corporis dolorem, dolore itaque doloribus.</p>
            </div>
        </div>
    );
};

export default SingleService;