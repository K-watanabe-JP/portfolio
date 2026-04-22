import { useRef } from "react";

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    return <section id="welcome">
        <p ref={subtitleRef}>Hi, I'm K.watanabe! Welcome to my</p>
        <h1 ref={titleRef} className="mt-7">Portfolio</h1>
        <div className="small-screen">
            <p>This Portfolio is designed for desktop/tabled screens only.</p>
            <p>Please use desktop/tabled to view this portfolio.</p>
        </div>
    </section>;
};

export default Welcome;