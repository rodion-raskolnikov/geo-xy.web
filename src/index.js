import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { configureStore } from './js/redux/store';

import './css/style.css'

import App from './js/containers/app';

const store = configureStore({});
const root = createRoot(document.getElementById('react-container'));

const router = createBrowserRouter([
    {
        path: "/map",
        element: <App />
    },
]);

root.render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
