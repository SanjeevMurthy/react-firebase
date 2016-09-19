import React,{Component,PropTypes} from 'react';

const Header=()=>{
    return (
        <header>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" id="bars" data-toggle="collapse" data-target="#navbar-collapse-1">
                            <span className="icon-bar"> </span>
                            <span className="icon-bar"> </span>
                            <span className="icon-bar"> </span>
				        </button>
                        <a className="navbar-brand" href="#">YogaDathri</a>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li><a href="">Home</a></li>
								<li><a href="">AboutUS</a></li>
							</ul>
					</div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
