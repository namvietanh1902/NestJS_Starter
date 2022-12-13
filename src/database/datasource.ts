import {config} from './ormconfig'
import {DataSource} from 'typeorm';
export const dataSource = new DataSource(config);
dataSource.initialize()
    .then(() =>{
        console.log('Connection established');
    })
