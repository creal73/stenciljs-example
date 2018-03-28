import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bye-bye',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() message: string;
  @Prop() image: string;

  render() {
    return (
      <div>
        <div>
          <img class="avatar" src={this.image}/>
        </div>
        <div class="legend">
          <h1>{this.message} Yohan !</h1>
        </div>        
      </div>
    );
  }
}
