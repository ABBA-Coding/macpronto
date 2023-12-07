import './App.scss';
import axios from 'axios';
import Tour from './components/Tour/Tour';
import News from './components/News/News';
import Modal from './components/Modal/Modal';
import Icons from './components/Icons/Icons';
import About from './components/About/About';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Shorts from './components/Shorts/Shorts';
import Retsep from './components/Retsep/Retsep';
import OneNews from './components/News/OneNews';
import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery/Gallery';
import Product from './components/Product/Product';
import HomeAbout from './components/About/HomeAbout';
import OneRetsep from './components/Retsep/OneRetsep';
import NotFound from './components/NotFound/NotFound';
import Contacts from './components/Contacts/Contacts';
import Categories from './components/Categories/Categories';
import OneCategory from './components/Categories/OneCategory';
import Infografics from './components/Infografics/Infografics';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollPercent from './components/ScrollPercent/ScrollPercent';
import SuspenseLoader from './components/SuspenseLoader/SuspenseLoader';
import Sertificat from './components/Sertificat/Sertificat';
import Sertificat2 from './components/Sertificat2/Sertificat2';
import Comments from './components/Comments/Comments';
import { QueryClientProvider, QueryClient } from 'react-query';

const App = () => {

  // urls of API

  const baseUrl = `https://api-macpronto.abba.uz/api`;
  const urlHeaderImages = `${baseUrl}/header_images/`;
  const urlCategories = `${baseUrl}/categories/`;
  const urlProducts = `${baseUrl}/products/`;
  const urlSliders = `${baseUrl}/sliders/`;
  const urlRecipes = `${baseUrl}/recipes/`;
  const urlGallery = `${baseUrl}/gallery/`;
  const urlTrends = `${baseUrl}/trends/`;
  const urlAbout = `${baseUrl}/about/`;
  const urlNews = `${baseUrl}/news/`;

  // Sliders API

  const [dataSliders, setDataSliders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlSliders);
      setDataSliders(request.data);
      return request;
    };
    fetchData()
  }, [urlSliders]);

  // HeaderImages API

  const [dataHeaderImages, setDataHeaderImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlHeaderImages);
      setDataHeaderImages(request.data);
      return request;
    };
    fetchData()
  }, [urlHeaderImages]);

  // Products API

  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlProducts);
      setDataProducts(request.data);
      return request;
    };
    fetchData()
  }, [urlProducts]);

  // Trends API

  const [dataTrends, setDataTrends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlTrends);
      setDataTrends(request.data);
      return request;
    };
    fetchData()
  }, [urlTrends]);

  // Categories API

  const [dataCategories, setDataCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlCategories);
      setDataCategories(request.data);
      return request;
    };
    fetchData()
  }, [urlCategories]);

  // About API

  const [dataAbout, setDataAbout] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlAbout);
      setDataAbout(request.data);
      return request;
    };
    fetchData()
  }, [urlAbout]);

  // Recipes API

  const [dataRecipes, setDataRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlRecipes);
      setDataRecipes(request.data);
      return request;
    };
    fetchData()
  }, [urlRecipes]);

  // News API

  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlNews);
      setDataNews(request.data);
      return request;
    };
    fetchData()
  }, [urlNews]);

  // Gallery API

  const [dataGallery, setDataGallery] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlGallery);
      setDataGallery(request.data);
      return request;
    };
    fetchData()
  }, [urlGallery]);

  // languages

  const { i18n } = useTranslation()

  const [english, setEnglish] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "en" ? true : false : false);
  const [russian, setRussian] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "ru" ? true : false : false);
  const [uzbek, setUzbek] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "uz" ? true : false : false);
  const [langTitle, setLangTitle] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng').toUpperCase() : "")

  function changeUzbek(item) {
    setUzbek(item)
    setEnglish(!item)
    setRussian(!item)
    i18n.changeLanguage("uz")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  }

  function changeRussian(item) {
    setUzbek(!item)
    setRussian(item)
    setEnglish(!item)
    i18n.changeLanguage("ru")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  }

  function changeEnglish(item) {
    setUzbek(!item)
    setEnglish(item)
    setRussian(!item)
    i18n.changeLanguage("en")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  }

  // scrolls

  const scrollToLocation = (item) => {
    const { hash } = window.location;
    if (hash !== '') {
      let retries = 0;
      const id = hash.replace('#', '');
      const scroll = () => {
        retries += 0;
        if (retries > 50) return;
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => element.scrollIntoView(), 0);
        } else {
          setTimeout(scroll, 100);
        }
      };
      if (!item) {
        scroll();
      }
    }
  }

  scrollToLocation();

  // modal

  const [showModal, setShowModal] = useState(false)

  function changeModal() {
    setShowModal(!showModal)
  }

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* {dataGallery.length == 0 &&
          <SuspenseLoader />
        } */}
        <ScrollToTop />
        <Navbar changeUzbek={changeUzbek} changeEnglish={changeEnglish} changeRussian={changeRussian} langTitle={langTitle} />
        <ScrollPercent />
        <Switch>
    
          <Route exact path="/">
            <Header english={english} russian={russian} uzbek={uzbek} dataProducts={dataProducts} dataHeaderImages={dataHeaderImages} />
            <Categories english={english} russian={russian} uzbek={uzbek} dataCategories={dataCategories} />
            {/* <Shorts english={english} russian={russian} uzbek={uzbek} dataTrends={dataTrends} /> */}
            <Retsep english={english} russian={russian} uzbek={uzbek} dataRecipes={dataRecipes} />
            <HomeAbout />
            <News english={english} russian={russian} uzbek={uzbek} dataNews={dataNews} />
            <Tour />
            <Gallery dataGallery={dataGallery} />
            <Sertificat english={english} russian={russian} uzbek={uzbek} />
            <Icons english={english} russian={russian} uzbek={uzbek} />
            <Infografics english={english} russian={russian} uzbek={uzbek} />
            <Sertificat2 english={english} russian={russian} uzbek={uzbek} />
            {/* <Comments english={english} russian={russian} uzbek={uzbek} /> */}
            <Contacts russian={russian} english={english} uzbek={uzbek} changeModal={changeModal} />
          </Route>

          <Route path="/about">
            <About />
            {/* <Shorts english={english} russian={russian} uzbek={uzbek} dataTrends={dataTrends} /> */}
            <News english={english} russian={russian} uzbek={uzbek} other={false} id={null} dataNews={dataNews} />
            <Contacts russian={russian} english={english} uzbek={uzbek} changeModal={changeModal} />
          </Route>

          <Route path="/category/:id">
            <OneCategory english={english} russian={russian} uzbek={uzbek} dataCategories={dataCategories} dataProducts={dataProducts} />
            <Icons english={english} russian={russian} uzbek={uzbek} />
            <Contacts russian={russian} english={english} uzbek={uzbek} changeModal={changeModal} />
          </Route>

          <Route path="/product/:id">
            <Product english={english} russian={russian} uzbek={uzbek} dataProducts={dataProducts} />
            <Infografics english={english} russian={russian} uzbek={uzbek} />
            <Contacts russian={russian} english={english} uzbek={uzbek} changeModal={changeModal} />
          </Route>

          <Route path="/news/:id">
            <OneNews english={english} russian={russian} uzbek={uzbek} dataNews={dataNews} />
            <Gallery dataGallery={dataGallery} />
            <Contacts russian={russian} english={english} uzbek={uzbek} changeModal={changeModal} />
          </Route>

          <Route path="/retsep/:id">
            <OneRetsep english={english} russian={russian} uzbek={uzbek} dataRecipes={dataRecipes} />
            <Contacts russian={russian} english={english} uzbek={uzbek} changeModal={changeModal} />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
        {showModal &&
          <Modal uzbek={uzbek} russian={russian} english={english} changeModal={changeModal} />
        }
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;