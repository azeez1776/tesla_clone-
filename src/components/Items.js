import React from 'react';
import './Items.css';
import Button from './Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Items({ title, desc, backgroundImg, leftBtnText, leftBtnLink, rightBtnText, rightBtnLink, twoButton, first }) {
    return (
        <div className="items" style={{
            backgroundImage: `url(${backgroundImg})`,
        }
        }>
            <div className="items_container">
                <div className="items_text">
                    <p>{title}</p>
                    <div className="items_textDesc">
                        {desc}
                    </div>
                </div>
                <div className="items_lowerThird">
                    <div className="items_buttons">
                        <Button imp="primary" text={leftBtnText} link={leftBtnLink} />
                        {twoButton &&
                            (<Button imp="secondary" text={rightBtnText} link={rightBtnLink} />)
                        }

                    </div>
                    {first &&
                        (<div className="items_expand">
                            <ExpandMoreIcon />
                        </div>)
                    }

                </div>
            </div>

        </div >
    )
}

export default Items
