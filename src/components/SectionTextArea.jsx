function SectionTextArea({ value, labelMsg, isSubmitted, onValueChange }) {
    return (
        <div className="section-text-area">
            <label className="label section-text-area__label">
                <span>{labelMsg}</span>
                <textarea
                    className="text-area label__text-area"
                    value={value}
                    onChange={onValueChange}
                    disabled={isSubmitted}
                ></textarea>
            </label>
        </div>
    );
}

export default SectionTextArea;
