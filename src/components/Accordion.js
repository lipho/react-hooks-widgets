import React, {Fragment, useState} from 'react';


function Accordion({items}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = items.map((i, idx)=> {
    const active = idx === activeIndex ? 'active' : '';

    return (
      <Fragment key={i.title}>
        <div className={`title ${active}`} onClick={() => setActiveIndex(idx)}>
          <i className='dropdown icon'/>
          {i.title}
        </div>
        <div className={`content ${active}`}>
          <p>{i.text}</p>
        </div>
      </Fragment>
    )
  });
  return (
    <div className='ui styled accordion'>
      {renderedItems}
    </div>
  );
}

Accordion.defaultProps = {
  items: []
};

export default Accordion
