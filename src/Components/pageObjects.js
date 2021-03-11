import React from 'react';

export const InternalLink = props => <a href={props.url}>{props.LinkText}</a>
export const ExternalLink = props => <a href={props.url}  target="_blank" rel="noopener noreferrer">{props.LinkText}</a>
export const Title = props => <h3 className="title">{props.title}</h3>
export const SectionTitle = props => <h2 className="title">{props.title}</h2>
export const RadioButton = props => <span><input type="radio" id={props.id} name={props.name} value={props.value}/><label for={props.id} className="radioOption">{props.label}</label></span>