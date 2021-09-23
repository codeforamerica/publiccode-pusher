import React from 'react'

const LoginForm = props => (
    <form
        action={ `https://github.com/login/oauth/authorize` }
        method='GET'
        onSubmit={ () => sessionStorage.setItem('target_repo', props.targetRepo) }
    >
        <input type="hidden" name="client_id" value="20bb9802a9e034bca42c" />
        <input type="hidden" name="state" value={ props.state } />
        <input type="hidden" name="scope" value="public_repo read:user" />
        <div style={{paddingBottom:'20px', borderBottom: '2px solid grey'}}>
            <div style={{textAlign:'center', fontSize:'larger', fontWeight:'bold', paddingBottom:'20px'}}>{"PublicCode Editor"}</div>
            <div>{"This tool facilitates the creation of a proper publiccode.yaml file which is an upcoming international standard to describe software projects for public good."}</div>
            <div>{"Once a proper publiccode.yaml is ready, the tool can create a branch and pull request in the repository that you are logged in."}</div>
        </div>
        <div style={{paddingBottom:'20px'}}/>
        <label htmlFor="target-repo">Enter the full URL of the GitHub repo you want to add a publiccode.yml file to</label>
        <aside>Enter the complete URL of the repo, starting with &ldquo;https://&rdquo;</aside>
        <input
            required
            id="target-repo"
            type="text"
            placeholder="https://github.com/repo-owner/repo-name"
            value={ props.targetRepo }
            onChange={ ev => props.handleTextInput(ev) }
        />
        <button className="editor_button editor_button--primary" >Login to GitHub</button>
    </form>
)

export default LoginForm
