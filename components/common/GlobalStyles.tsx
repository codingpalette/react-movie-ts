/** @jsx jsx */
import {Global, css, jsx} from "@emotion/core";


export const GlobalStyle = () => (
    <Global styles={css`
            body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0;padding:0}
            fieldset,img {border:0 none}
            dl,ul,ol,menu,li {list-style:none}
            blockquote, q {quotes:none}
            blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}
            input,select,textarea,button {font-size:100%;vertical-align:middle}
            button {border:0 none;background-color:transparent;cursor:pointer}
            table {border-collapse:collapse;border-spacing:0}
            body {-webkit-text-size-adjust:none} /* 뷰표트 변환시 폰트크기 자동확대 방지 */
            input[type='text'],input[type='password'],input[type='submit'],input[type='search'] {-webkit-appearance:none; border-radius:0}
            input:checked[type='checkbox'] {background-color:#666; -webkit-appearance:checkbox}
            button,input[type='button'],input[type='submit'],input[type='reset'],input[type='file'] {-webkit-appearance:button; border-radius:0}
            input[type='search']::-webkit-search-cancel-button {-webkit-appearance:none}
            
            body,th,td,input,select,textarea,button {
                
                line-height:1;
                font-family: 'Noto Sans KR', sans-serif;
                color:#333
            } /* color값은 디자인가이드에 맞게사용 */
            a {color:#333;text-decoration:none}
            a:active, a:hover {text-decoration:none}
            address,caption,cite,code,dfn,em,var {font-style:normal;font-weight:normal}  
            .clearfix:after{content:"";clear:both;display:block;}
            .hidden_label{display:block; width:0 !important; height:0 !important; visibility:hidden; margin:0 !important; padding:0 !important;}
            .screen_out {overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px}
            
            html{
                font-size: 14px;
                width: 100%;
                height: 100%;
            }
            @media screen and (min-width:768px) {
                html{
                    font-size: 16px;
                }
            }
            
            body {
                width: 100%;
                height: 100%;
                background-color: #fff;
            }
            body.dark {
                background-color: #000;
            }
            
            #root{
                width: 100%;
                height: 100%;
            }
            
            
      `}
    />
)
