
import React from "react";
import ReactGA from "react-ga4";

export const ContactUs = () => {
    const useAnalyticsEventTracker = (category="categoria") => {
        const eventTracker = (action = "test action", label = "test label") => {
            ReactGA.event({category, action, label});
        }
        return eventTracker;
    }
    const gaEventTracker = useAnalyticsEventTracker('Contact us');

    return (
        <div>
            <h3>Contact Us</h3>
                <div> 
                    <a href="#" onClick={()=>gaEventTracker('call')}>Ligue</a>
                </div>
                <div>
                    <a href="#" onClick={()=>gaEventTracker('email')}>Escreva</a>
                </div>
        </div>
    )
}

export default ContactUs;