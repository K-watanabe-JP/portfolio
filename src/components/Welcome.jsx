import { useRef } from "react";

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{
                fontVariationSettings: `'wght' ${baseWeight}`
            }}>
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    return <section id="welcome">
        <p ref={subtitleRef}>
            {renderText("Hi, I'm K.watanabe! Welcome to my", "text-3xl font-georama", 100)}
        </p>
        <h1 ref={titleRef} className="mt-7">
            {renderText("Portfolio", "text-9xl italic font-georama", 400)}
        </h1>
        <div className="small-screen">
            <p>This Portfolio is designed for desktop/tabled screens only.</p>
            <p>Please use desktop/tabled to view this portfolio.</p>
        </div>
    </section>;
};

export default Welcome;