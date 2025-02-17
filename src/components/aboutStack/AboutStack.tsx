
export const AboutStack = () => {
    const stack: string[] = [
        "Javascript",
        "TypeScript",
        "React",
        "Redux",
        "CSS",
        "HTML",
        "Git",
        "DevTools",
        "Postman"
    ];

        return (
        <div className='about-description-stack'>
            {stack.map((text, index) => (
                <span key={index} className='about-description-stack-name'>
                    {text}
                </span>
            ))}
        </div>
    );
}