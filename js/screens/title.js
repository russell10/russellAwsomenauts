game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me. Sprite(0, 0, me.loader.getImage('title-screen')), -10); // TODO
	
                me.input.bindkey(me.input.KEY.ENTER, "start");
                
                me.game.world.addChild(new(me.Renderable.extend({
                    init: function(){
                        this._super(me.Renderable, 'init', [510, 30, me.game.viewport.height]);
                        this.font = new me.Font("Arial", 46, "white");
                    },
                    
                    draw: function(renderer){
                        
                    }
                })));
                     
            
        },
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		; // TODO
	}
});
