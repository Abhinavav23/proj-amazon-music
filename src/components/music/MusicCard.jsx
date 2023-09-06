import React from 'react'

export const MusicCard = (props) => {
    console.log('props', props);
    const {title} = props
  return (
    <section>
        <div>{title}</div>
    </section>
  )
}
