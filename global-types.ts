import express from 'express';

export interface UnitResponse extends express.Response{
    id : number;
};