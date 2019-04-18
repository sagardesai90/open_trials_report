import React, { Component } from 'react';
import M from 'materialize-css';
import "./searchRes.css";
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

class SearchRes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            saved:false
        };
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoader', function() {
            let el = document.querySelectorAll('.collapsible');
            M.Collapsible.init(el, {});
        });
    };

    expand = event => {
        event.preventDefault();
        this.setState({expand: !this.this.expand});
        console.log(this.props.resultObject);
    };

    save = event => {
        event.preventDefault();
        event.target.parentElement.parentElement.children[0].classList.add('red-background');
        this.setState({ saved: !this.state.saved });
        M.toast({html: 'Trial added to report', displayLength: 1500});
        event.target.classList.add('red');
        this.props.saveTrial(event);
    }

    delete = event => {
        event.preventDefault();
        event.target.parentElement.parentElement.children[0].classList.remove('red-background');
        this.setState({ saved: !this.state.saved });
        M.toast({ html: 'Trial removed from report', displayLength: 1500 });
        event.target.classList.remove('red');
        this.props.saveTrial(event);
    }

    render() {
        return (
            <div className="row">
                <div className="column"> 
                    <div className="card">
                        <div>
                            <h6 class="color-block-head">
                                {this.props.number + 1} : {this.props.resultObject.public_title}
                            </h6>
                        </div>
                        <div className="collapsible-body">
                            <span className="left-align" info={JSON.stringify(this.props.resultObject)}>
                                <h6>
                                    <b>Summary:</b> {this.props.resultObject.brief_summary ? this.props.resultObject.brief_summary : 'No summary provided'}
                                </h6>
                                <h6>
                                    <b>Status:</b> {this.props.resultObject.status ? this.props.resultObject.status : 'No status provided'}
                                </h6>
                                <h6>
                                    <b>Age Range:</b> {this.props.resultObject.age_range ? this.props.resultObject.age_range.min_age + ' - ' + this.props.resultObject.age_range.max_age : 'No age range provided'}
                                </h6>
                                <h6>
                                    <b>Target Sample Size:</b> {this.props.resultObject.target_sample_size ? this.props.resultObject.target_sample_size : 'No target sample size provided'}
                                </h6>
                                <h6>
                                    <b>Gender:</b> {this.props.resultObject.gender ? this.props.resultObject.gender : 'No gender provided'}
                                </h6>
                                <h6>
                                    <b>Conditions:</b> {!this.props.resultObject.conditions ? 'No conditions provided' : this.props.resultObject.conditions.length === 0 ? 'No conditions provided' : <ul> {this.props.resultObject.conditions.map((a, i) => <li key={i}>{a.name}</li>)} </ul>}
                                </h6>
                                <h6>
                                    <b>Interventions:</b> {!this.props.resultObject.interventions ? 'No interventions provided' : this.props.resultObject.interventions.length === 0 ? 'No interventions provided' : <ul> {this.props.resultObject.interventions.map((a, i) => <li key={i}>{a.name}</li>)} </ul>}
                                </h6>
                                <h6>
                                    <b>Locations:</b> {!this.props.resultObject.locations ? 'No locations provided' : this.props.resultObject.locations.length === 0 ? 'No locations provided' : <ul> {this.props.resultObject.locations.map((a, i) => <li key={i}>{a.name}</li>)} </ul>}
                                </h6>
                                <h6>
                                    <b>Records:</b> {!this.props.resultObject.records ? 'No records provided' : this.props.resultObject.records.length === 0 ? 'No records provided' : <ul> {this.props.resultObject.records.map((a, i) => <li key={i}><a className="links" target='_blank' href={a.source_url}>{a.source_url}</a></li>)} </ul>}
                                </h6>
                                <h6>
                                    <b>Documents:</b> {!this.props.resultObject.documents ? 'No documents provided' : this.props.resultObject.documents.length === 0 ? 'No documents provided' : <ul> {this.props.resultObject.documents.map((a, i) => <li key={i}>{a.name}</li>)} </ul>}
                                </h6>
                               
                                {!this.state.saved ?
                                    <button
                                        id="saveButton"
                                        className="btn addRemove"
                                        onClick={this.save}
                                    >
                                        Add to Report
                                    </button> :
                                    <button
                                        id="saveButton"
                                        className="btn addRemove"
                                        onClick={this.delete}
                                    >
                                        Remove from Report
                                    </button>
                                }
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            
        )
    };
};

export default SearchRes;