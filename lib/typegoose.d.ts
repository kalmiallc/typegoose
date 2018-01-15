/// <reference types="mongoose" />
import 'reflect-metadata';
import * as mongoose from 'mongoose';
export * from './method';
export * from './prop';
export * from './hooks';
export * from './plugin';
export { getClassForDocument } from './utils';
export declare type InstanceType<T> = T & mongoose.Document;
export declare type ModelType<T> = mongoose.Model<InstanceType<T>> & T;
export interface ExtraOptions {
    onSchemaCreate: (scehma: mongoose.Schema) => mongoose.Schema;
}
export interface GetModelForClassOptions {
    existingMongoose?: mongoose.Mongoose;
    schemaOptions?: mongoose.SchemaOptions;
    existingConnection?: mongoose.Connection;
    extraOptions?: ExtraOptions;
}
export declare class Typegoose {
    getModelForClass<T>(t: T, {existingMongoose, schemaOptions, existingConnection, extraOptions}?: GetModelForClassOptions): mongoose.Model<InstanceType<this>> & this & T;
    setModelForClass<T>(t: T, {existingMongoose, schemaOptions, existingConnection, extraOptions}?: GetModelForClassOptions): mongoose.Model<InstanceType<this>> & this & T;
    private buildSchema(name, schemaOptions, sch?, extraOptions?);
}
