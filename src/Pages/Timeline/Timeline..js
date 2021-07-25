import {TmData} from './Data';
import './styles.css';
import TmItem from './Item';

const Timeline = () => TmData.length > 0 && (
      <div className="timeline-container">
          { TmData.map((data, idx) => (
              <TmItem data={data} key={idx} />
           ))  
          }
      </div>  
    );



export default Timeline;