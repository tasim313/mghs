import React from 'react'
import styles from '@/components/Contact/Map/GoogleMap.module.css'

const GoogleMap = () => {
    return (
        <>
             <div class={styles.mapouter }>
                <div class={styles.gmap_canvas }>
                        <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q= V7FG+2QP, Basurhat 3850, Dacca&t=k&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                </div>
        </>
    )
}

export default GoogleMap;