function SectionInput({
    value,
    labelMsg,
    inputType,
    isSubmitted,
    onValueChange,
}) {
    return (
        <div className="section-input">
            <label className="label section-input__label">
                <span>{labelMsg}</span>
                <input
                    type={inputType}
                    className="input label__input"
                    value={value}
                    onChange={onValueChange}
                    disabled={isSubmitted}
                />
            </label>
        </div>
    );
}

export default SectionInput;
