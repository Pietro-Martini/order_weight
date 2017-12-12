const sumIndividualDigits = num => num.split('').reduce((accum, curr) => accum + parseInt(curr), 0);

const orderWeight = str => str.split(' ').map(num => [ num, sumIndividualDigits(num) ])
                                         .sort((a, b) => {
                                            if ( a[1] === b[1] ) {
                                              return ( a[0] < b[0] ) ? -1 : 1;
                                            } else if ( a[1] < b[1] ) {
                                              return -1;
                                            }
                                            return 1;
                                          }).map(arr => arr[0]).join(' ');
