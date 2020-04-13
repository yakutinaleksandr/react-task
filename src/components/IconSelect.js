import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFish} from "@fortawesome/free-solid-svg-icons";
import {faAppleAlt} from "@fortawesome/free-solid-svg-icons/faAppleAlt";
import {faCheese} from "@fortawesome/free-solid-svg-icons/faCheese";
import {faCarrot} from "@fortawesome/free-solid-svg-icons/faCarrot";

export const IconSelect = props => {

    const [show, setShow] = useState(false);

    const changeShow = () => setShow(!show);

    const [icon, setIcon] = useState(props.default);

    const changeIcon = newIcon => {
        setIcon(newIcon);
        props.onChange(newIcon);
        changeShow();
    };

    return <div>

        <div className='icon'>
            <FontAwesomeIcon icon={icon} className='fa-5x' onClick={changeShow}/>
        </div>
        <div>
            {show && <div className='icon-options-wrapper'>
                <div className='icon selectable'>
                    <FontAwesomeIcon icon={faFish} className='fa-5x' onClick={() => changeIcon(faFish)}/>
                </div>

                <div className='icon selectable'>
                    <FontAwesomeIcon icon={faAppleAlt} className='fa-5x'
                                     onClick={() => changeIcon(faAppleAlt)}/>
                </div>

                <div className='icon selectable'>
                    <FontAwesomeIcon icon={faCheese} className='fa-5x'
                                     onClick={() => changeIcon(faCheese)}/>
                </div>

                <div className='icon selectable'>
                    <FontAwesomeIcon icon={faCarrot} className='fa-5x'
                                     onClick={() => changeIcon(faCarrot)}/>
                </div>
            </div>}
        </div>
    </div>
};