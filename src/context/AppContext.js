import React , {  useState, createContext } from 'react';


export const AppContext = createContext();

export const AppProvider = (props) => {

    const FarsanObject = {
        "title": "بكج فرسان",
        "price": "1000",
        "description": "رحلة الى فرسان تشمل حجز العبارة وتسهيل اجرائات الصعود اليها ,   استقبال السائح هناك",
        "status": "star",
        "period" : "6 ساعات",
        "stars": "4",
        "image": "/images/packages/farsan_package/main.jpg",
        "services": [
            {
                "service": 1,
                "headline": "توفير سيارة",
                "icon": "https://cdn-icons-png.flaticon.com/512/1048/1048315.png",
                "options": [
                    {
                        "option" :"مع سائق",
                        "option_price": "500",
                    },
                    {
                        "option": "بدون سائق",
                        "option_price": "250",
                    },
                ],

            },
            {
                "service": 2,
                "headline": "توفير فندق",
                "icon": "https://cdn-icons-png.flaticon.com/512/1475/1475996.png",
                "options": [
                    {
                        "option" : "شاليهات",
                        "option_price": "600",
                    },
                    {
                        "option" : "نزل ريفية",
                        "option_price": "400",
                    },
                    {
                        "option" : "ثلاث نجوم",
                        "option_price": "300",
                    },
                    {
                        "option": "اربع نجوم",
                        "option_price": "600",
                    },
                    {
                        "option": "خمس نجوم",
                        "option_price": "800",
                    },

                ],

            },
            {
                "service": 3,
                "headline": "الترجمة",
                "icon": "https://cdn-icons-png.flaticon.com/512/2875/2875427.png",
                "options": [
                    {
                        "option" : "جهاز ترجمة",
                        "option_price": "50",
                    },
                    {
                        "option": "مترجم شخصي",
                        "option_price": "300",
                    },
                ],

            },
            {
                "headline": "رحلة غوص",
                "icon": "https://cdn-icons-png.flaticon.com/512/3163/3163732.png",
                "options": [
                    {
                        "option" : "مع المدرب والمستلزمات",
                        "option_price": "500",
                    },
                    {
                        "option": "المستلزمات فقط",
                        "option_price": "150",
                    },
                    {
                        "option": "مدرب فقط",
                        "option_price": "250",
                    },
                ],

            },
            {
                "service": 4,
                "headline": "دبابات مائية",
                "icon": "https://cdn-icons-png.flaticon.com/512/4607/4607325.png",
                "options": [

                    {
                        "option": "ايجار باليوم",
                        "option_price": "50",
                    },

                ],

            },
            {
                "service": 5,
                "headline": "رحلة صيد وسباحة",
                "icon": "https://cdn-icons-png.flaticon.com/512/1886/1886369.png",
                "options": [

                    {
                        "option": "رحلة للصيد والسباحة",
                        "option_price": "500",
                    },

                ],

            },

        ],

    };

    const [retreivealProduct , setRetreivalProduct] = useState(
        FarsanObject
    );



  



   
   


    return (
            <AppContext.Provider value={ { retrive: [retreivealProduct , setRetreivalProduct]  }} >
                {props.children}
            </AppContext.Provider>
    )
}