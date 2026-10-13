import { Route, Routes } from "react-router";
import Main from "./layouts/Main/Main";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import EgitimOgretimYonetmeligi from "./pages/Informations/EgitimOgretimYonetmeligi";
import DisiplinYonetmeligi from "./pages/Informations/DisiplinYonetmeligi";
import YazOkulu from "./pages/Informations/YazOkulu";
import CiftAnadal from "./pages/Informations/CiftAnadal";
import Yandal from "./pages/Informations/Yandal";
import ObsDersAlma from "./pages/Informations/ObsDersAlma";

function App() {
    return (
        <Routes>
            <Route element={<Main />}>
                <Route index element={<Home />} />
                <Route path="egitim-ogretim-yonetmeligi" element={<EgitimOgretimYonetmeligi />} />
                <Route path="disiplin-yonetmeligi" element={<DisiplinYonetmeligi />} />
                <Route path="yaz-okulu" element={<YazOkulu />} />
                <Route path="cift-anadal" element={<CiftAnadal />} />
                <Route path="yandal" element={<Yandal />} />
                <Route path="obs-ders-alma" element={<ObsDersAlma />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
