import {useEffect} from 'react';
import {ROOT_PATH} from './../../constants/Path';

const Disqus = () => {
  useEffect(()=>{

    let disqus_config = function (this: any) {
     this.page.url = ROOT_PATH;
     this.page.identifier = '/effect';
    };

    const script = document.createElement('script');
    script.src = "https://react-hooks.disqus.com/embed.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [])
  return <div id="disqus_thread"></div>
}

export default Disqus;
