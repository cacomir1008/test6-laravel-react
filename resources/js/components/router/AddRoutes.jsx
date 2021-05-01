//Add系（フォーム）のrouteをまとめて配列にしているページ
import AddCondition from "../AddCondition";
import AddSymptom from "../AddSymptom";
import AddTreatment from "../AddTreatment";

export const AddRoutes = [
    //画面ごとの要素を配列に
    {
        path:"/AddCondition",
        exact:false,
        children:<AddCondition />
    },
    {
        path:"/AddSymptom",
        exact:false,
        children:<AddSymptom />
    },
    {
        path:"/AddTreatment",
        exact:false,
        children:<AddTreatment />
    },
]