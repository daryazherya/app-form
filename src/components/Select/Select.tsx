import { City, Country, InputKey } from "../../data";
import styles from './Select.module.css'

interface SelectProps {
    value: string | null;
    label: InputKey;
    nameInput: string;
    options: City[] | Country[];
    onChange: (keyName: InputKey, targetValue: string | null) => void;
    disabled?: boolean;
}

const SelectOne = ({
    value,
    options,
    nameInput,
    label,
    onChange,
    disabled = false,
}: SelectProps) => {
    if (disabled) {
        return (
            <select disabled
                className={styles.select}
            >
                <option value="" disabled>
                    {nameInput}
                </option>
            </select>
        );
    }
    return (
        <select
            className={styles.select}
            value={value === null ? "" : value}
            onChange={(e) => onChange(label, e.target.value)}
        >
            <option value="" disabled>
                {nameInput}
                </option>
            {options.map(({ name, id }) => {
                return (
                    <option value={id} key={id}>
                        {name}
                    </option>
                );
            })}
             </select>
          );
};

export default SelectOne;
