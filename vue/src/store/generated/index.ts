// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import AlexS778CVProjectAlexs778CvprojectCvproject from './AlexS778/CVProject/alexs778.cvproject.cvproject'


export default { 
  AlexS778CVProjectAlexs778CvprojectCvproject: load(AlexS778CVProjectAlexs778CvprojectCvproject, 'alexs778.cvproject.cvproject'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
