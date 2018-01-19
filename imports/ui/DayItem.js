import React from 'react';
import Day from './Day';

export default class Tester extends React.Component{
  render(){
    return (
      <div>
        <div className="flex-week">
        <Day hour="01" cName="day-item "/>
        <Day hour="02" cName="day-item blue "/>
        <Day hour="03" cName="day-item green"/>
        <Day hour="04" cName="day-item blue "/>
        <Day hour="05" cName="day-item "/>
        <Day hour="06" cName="day-item "/>
        <Day hour="07" cName="day-item "/>
        </div>
        <div className="flex-week">
        <Day hour="08" cName="day-item blue"/>
        <Day hour="Jan 09" cName="day-item blue"/>
        <Day hour="10" cName="day-item  blue"/>
        <Day hour="11" cName="day-item "/>
        <Day hour="12" cName="day-item "/>
        <Day hour="13" cName="day-item "/>
        <Day hour="14" cName="day-item "/>
        </div>
        <div className="flex-week">
        <Day hour="21" cName="day-item "/>
        <Day hour="22" cName="day-item blue"/>
        <Day hour="23" cName="day-item "/>
        <Day hour="24" cName="day-item "/>
        <Day hour="25" cName="day-item "/>
        <Day hour="26" cName="day-item "/>
        <Day hour="27" cName="day-item "/>
        </div>
        <div className="flex-week">
        <Day hour="28" cName="day-item "/>
        <Day hour="29" cName="day-item "/>
        <Day hour="30" cName="day-item "/>
        <Day hour="Feb 01" cName="day-item "/>
        <Day hour="02" cName="day-item "/>
        <Day hour="03" cName="day-item "/>
        <Day hour="04" cName="day-item "/>
        </div>

      </div>
    );
  };
}
