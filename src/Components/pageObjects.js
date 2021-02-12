import React from 'react';

export const InternalLink = props => <a href={props.url}>{props.LinkText}</a>
export const ExternalLink = props => <a href={props.url}  target="_blank" rel="noopener noreferrer">{props.LinkText}</a>
export const Title = props => <h3 className="title">{props.title}</h3>
export const SectionTitle = props => <h2 className="title">{props.title}</h2>



