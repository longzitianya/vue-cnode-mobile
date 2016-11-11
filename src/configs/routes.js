import Index from '../views/index';
import TopicList from '../views/topicList';
import Topic from '../views/topic';
import NewTopic from '../views/newTopic';
import Login from '../views/login';
import User from '../views/user';

const routes = [{
    path: '/',
    redirect: {name: 'list'}
}, {
    path: '/list',
    name: 'list',
    component: TopicList
}, {
    path: '/topic/:id',
    name: 'topic',
    component: Topic
}, {
    path: '/topic/create',
    name: 'create',
    component: NewTopic
}, {
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/user/:loginname',
    name: 'user',
    component: User
}]


export default routes;