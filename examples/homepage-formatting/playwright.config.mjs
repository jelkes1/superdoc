import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests',timeout:240000,use:{baseURL:'http://127.0.0.1:5431'},webServer:{command:'vite preview --host 127.0.0.1 --port 5431 --strictPort',url:'http://127.0.0.1:5431/examples/formatting/',reuseExistingServer:false,timeout:60000}});
