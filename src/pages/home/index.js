import React, {useEffect} from 'react';
import i18n from "@/locale";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {updateChainId}  from "@/state/application/actions";
import {fetchPost} from  '@/state/application/reducer'
import Web3 from 'web3'

const Home = props => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    useEffect(()=>{
        i18n.changeLanguage('zh')
         dispatch(fetchPost({dddd:1111}))
    },[])
    const handleChangeLang = () => {
        i18n.changeLanguage('en')
    }
    return (
        <div>
            <h1 onClick={handleChangeLang}>{t('name')}</h1>

        </div>
    )
}
export default Home;
