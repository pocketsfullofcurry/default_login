import React from 'react';
import Day from './Day';

export default class Tester extends React.Component{
  render(){
    return (
      <div>
        <div className="flex-week">
        <Day hour="1" coco="day-item blue"/>
        <Day hour="2" coco="day-item red"/>
        <Day hour="3" coco="day-item blue"/>
        <Day hour="4" coco="day-item green"/>
        <Day hour="5" coco="day-item yellow"/>
        <Day hour="6" coco="day-item pink"/>
        <Day hour="7" coco="day-item red"/>
        </div>
        <div className="flex-week">
        <Day hour="8" coco="day-item blue"/>
        <Day hour="9" coco="day-item red"/>
        <Day hour="10" coco="day-item blue"/>
        <Day hour="11" coco="day-item green"/>
        <Day hour="12" coco="day-item yellow"/>
        <Day hour="13" coco="day-item pink"/>
        <Day hour="14" coco="day-item red"/>
        </div>
      </div>
    );
  };
}
