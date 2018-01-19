import React from 'react';
import Day from './Day';

export default class Tester extends React.Component{
  render(){
    return (
      <div>
        <div className="flex-week">
        <Day hour="01" coco="day-item "/>
        <Day hour="02" coco="day-item "/>
        <Day hour="03" coco="day-item "/>
        <Day hour="04" coco="day-item "/>
        <Day hour="05" coco="day-item "/>
        <Day hour="06" coco="day-item "/>
        <Day hour="07" coco="day-item "/>
        </div>
        <div className="flex-week">
        <Day hour="08" coco="day-item "/>
        <Day hour="09" coco="day-item "/>
        <Day hour="10" coco="day-item "/>
        <Day hour="11" coco="day-item "/>
        <Day hour="12" coco="day-item "/>
        <Day hour="13" coco="day-item "/>
        <Day hour="14" coco="day-item "/>
        </div>
        <div className="flex-week">
        <Day hour="21" coco="day-item "/>
        <Day hour="22" coco="day-item "/>
        <Day hour="23" coco="day-item "/>
        <Day hour="24" coco="day-item "/>
        <Day hour="25" coco="day-item "/>
        <Day hour="26" coco="day-item "/>
        <Day hour="27" coco="day-item "/>
        </div>
        <div className="flex-week">
        <Day hour="28" coco="day-item "/>
        <Day hour="29" coco="day-item "/>
        <Day hour="30" coco="day-item "/>
        <Day hour="01" coco="day-item "/>
        <Day hour="02" coco="day-item "/>
        <Day hour="03" coco="day-item "/>
        <Day hour="04" coco="day-item "/>
        </div>
        
      </div>
    );
  };
}
