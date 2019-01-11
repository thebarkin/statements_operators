/*
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.
 */

const men = {
  name: "Socrates",
  morality: true,
}

if ( men.name ===  'Socrates' && men.morality ){
  console.log( 'Socrates is mortal' );
}

/*
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
 */

const cake = {
  flavor: "vanilla",
}

if ( cake.flavor === "vanilla" && cake.flavor !== "chocolate" ) {
  console.log( "This cake is vanilla" );
}