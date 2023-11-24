interface TextInputProps {
    label: string,
    placeholder: string,
    type: string,
    defaultValue?: string,
    value?: string,
    onChange?: (e: any) => void
}

function TextInput({ label, placeholder, type, defaultValue, onChange, value }: TextInputProps) {
    return (
        <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
            <label className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#344054]">
                {label}
            </label>
            <input
                className="put appearance-none w-full border border-[#d0d5dd] rounded-md py-2 px-3 text-black focus:outline-none"
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
                value={value}

            />
        </div>
    );
}

export default TextInput;
