import React from 'react';
import Day from './Day';

export default class Tester extends React.Component{
  render(){
    return (
      <div>
        <div>
        <Day hour="1" coco="day blue"/>
        <Day hour="2" coco="day red"/>
        <Day hour="3" coco="day blue"/>
        <Day hour="4" coco="day green"/>
        <Day hour="5" coco="day yellow"/>
        <Day hour="6" coco="day pink"/>
        <Day hour="7" coco="day red"/>
        </div>
      </div>
    );
  };
}
