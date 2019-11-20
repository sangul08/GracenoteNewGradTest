import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export class ImageLocationData {
    data = [
        {
            id: '15171223',
            source: '../assets/15171223.jpg',
            title: 'Life Below Zero',
            description: '',
            cast: [
                {
                    name:  ''
                }
            ]
        },
        {
            id: '15481959',
            source: '../assets/15481959.jpg',
            title: 'Life Below Zero',
            description: '',
            cast: [
                {
                    name:  ''
                }
            ]
        },
        {
            id: '16381191',
            source: '../assets/16381191.jpg',
            title: 'Life Below Zero',
            description: '',
            cast: [
                {
                    name:  ''
                }
            ]
        },
        {
            id: '17462348',
            source: '../assets/17462348.jpg',
            title: 'Life Below Zero',
            description: '',
            cast: [
                {
                    name:  ''
                }
            ]
        }
    ];
    getImages() {
        return this.data;
    }
}
