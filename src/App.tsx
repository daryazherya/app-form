import { useState } from "react";
import styles from "./App.module.css";
import { SelectValues, InputKey, countries, countryId2cities, residencies, universities, dependencies } from "./data";
import SelectOne from "./components/Select/Select";

function App() {
    const [selectValues, setSelectValues] = useState<SelectValues>({
        country: null,
        city: null,
        university: null,
        residence: null
    });
    const isDisabledButton = !Object.values(selectValues).every(value => value !== null);


    function updateSelectValues(keyName: InputKey, targetValue: string | null) {

        setSelectValues((prev) => {

            const copy = { ...prev };

            for (const dependency in dependencies) {
                if (Object.values(copy).every(value => value !== null) && 
                    dependencies[keyName].includes(dependency as InputKey)) {
                    copy[dependency as InputKey] = null;
                    
                }
                if (dependencies[keyName].includes(dependency as InputKey)) {
                    copy[dependency as InputKey] = null;
                }
            }
            copy[keyName] = targetValue;
            return copy
        })
    }
    console.log(selectValues, 'lll')


    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <SelectOne
                    label="country"
                    nameInput={'Страна'}
                    options={countries}
                    value={selectValues.country}
                    onChange={updateSelectValues}
                />
                <SelectOne
                    label="city"
                    nameInput={'Город'}
                    options={selectValues.country === null ? [] : countryId2cities[selectValues.country]}
                    value={selectValues.city}
                    onChange={updateSelectValues}
                    disabled={selectValues.country === null}
                />
                <SelectOne
                    label="university"
                    nameInput={'Университет'}
                    options={selectValues.city === null ? universities : selectValues.country !== null ? universities : []}
                    value={selectValues.university}
                    onChange={updateSelectValues}
                />
                <SelectOne
                    label="residence"
                    nameInput={'Жилье'}
                    options={selectValues.university === null ? [] : selectValues.country !== null ? residencies[selectValues.country] : []}
                    value={selectValues.residence}
                    onChange={updateSelectValues}
                    disabled={selectValues.city === null}
                />
                <button
                    className={styles.button}
                    type='submit'
                    disabled={isDisabledButton}
                >
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default App;
