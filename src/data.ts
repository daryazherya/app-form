export type CountryId = string;
export type CityId = string;
export type ResidenceId = string;

export type Country = {
    id: CountryId;
    name: string;
};

export type City = {
    id: CityId;
    name: string;
};

export type University = {
    id: string;
    name: string;
};

export type Residence = {
    id: ResidenceId;
    name: string;
};


export type InputKey =
    | "country"
    | "city"
    | "university"
    | "residence";

export type SelectValues = Record<InputKey, string | null>;
export type DependencyMap = Record<InputKey, InputKey[]>;

export const dependencies: DependencyMap = {
    country: ['city', "residence"],
    city: ["residence"],
    university: [],
    residence: [],
};

export const countries: Country[] = [
    { id: "rf", name: "РФ" },
    { id: "rb", name: "РБ" },
];

export const countryId2cities: Record<CountryId, City[]> = {
    rf: [
        { id: "msk", name: "Москва" },
        { id: "sochi", name: "Сочи" },
    ],
    rb: [
        { id: "minsk", name: "Минск" },
        { id: "gomel", name: "Гомель" },
    ],
};

export const universities: University[] = [
    { id: "tech", name: "Технический" },
    { id: "hum", name: "Гуманитарный" },
];

export const residencies: Record<ResidenceId, Residence[]> = {
    rf: [
        { id: "rent", name: "Аренда" },
        { id: "dorm", name: "Общежития" },
        { id: "rent&dorm", name: "Общежития + Аренда" },
        { id: "no", name: "Не интересует" },
    ],
    rb: [
        { id: "dorm", name: "Общежития" },
        { id: "no", name: "Не интересует" },
    ],
};
