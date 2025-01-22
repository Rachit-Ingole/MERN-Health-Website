const data = [
  {
    "quote": "What you do today can improve all your tomorrows.",
    "author": "Ralph Marston"
  },
  {
    "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "author": "Zig Ziglar"
  },
  {
    "quote": "Intelligence without ambition is a bird without wings.",
    "author": "Salvador Dali"
  },
  {
    "quote": "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
    "author": "Epictetus"
  },
  {
    "quote": "We may encounter many defeats but we must not be defeated.",
    "author": "May Angelou"
  },
  {
    "quote": "Problems are not stop signs, they are guidelines.",
    "author": "Robert H. Schuller"
  },
  {
    "quote": "Be kind whenever possible. It is always possible.",
    "author": "Dalai Lama"
  },
  {
    "quote": "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    "author": "Ayn Rand"
  },
  {
    "quote": "A somebody was once a nobody who wanted to and did.",
    "author": "John Burroughs"
  },
  {
    "quote": "Life is 10% what happens to us and 90% how we react to it.",
    "author": "Dennis P. Kimbro"
  },
  {
    "quote": "Even if you’re on the right track, you’ll get run over if you just sit there.",
    "author": "Will Rogers"
  },
  {
    "quote": "Luck is a dividend of sweat. The more you sweat, the luckier you get.",
    "author": "Ray Kroc"
  },
  {
    "quote": "Courage is the first of human qualities because it is the quality which guarantees all others.",
    "author": "Winston Churchill"
  },
  {
    "quote": "The great thing in this world is not so much where you stand, as in what direction you are moving.",
    "author": "Oliver Wendell Holmes"
  },
  {
    "quote": "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    "author": "Carl Bard"
  },
  {
    "quote": "Speak less than you know; have more than you show.",
    "author": "William Shakespeare"
  },
  {
    "quote": "Education costs money. But then so does ignorance.",
    "author": "Sir Claus Moser"
  },
  {
    "quote": "The journey of a thousand miles begins with one step.",
    "author": "Lao Tzu"
  },
  {
    "quote": "Do not let what you cannot do interfere with what you can do.",
    "author": "John Wooden"
  },
  {
    "quote": "Defeat is not bitter unless you swallow it.",
    "author": "Joe Clark"
  },
  {
    "quote": "An obstacle is often a stepping stone.",
    "author": "Prescott"
  },
  {
    "quote": "Don’t worry about failures, worry about the chances you miss when you don’t even try.",
    "author": "Jack Canfield"
  },
  {
    "quote": "Live each day as if your life had just begun.",
    "author": "Johann Wolfgang Von Goethe"
  },
  {
    "quote": "The secret to getting ahead is getting started.",
    "author": "Mark Twain"
  },
  {
    "quote": "The will to win, the desire to succeed, the urge to reach your full potential, these are the keys that will unlock the door to personal excellence.",
    "author": "Confucius"
  },
  {
    "quote": "Set your goals high and don’t stop until you get there.",
    "author": "Bo Jackson"
  },
  {
    "quote": "The world is full of magical things patiently waiting for our wits to grow sharper.",
    "author": "Bertrand Russell"
  },
  {
    "quote": "Let us make our future now, and let us make our dreams tomorrow’s reality.",
    "author": "Malala Yousafzai"
  },
  {
    "quote": "All you need is the plan, the road map, and the courage to press on to your destination.",
    "author": "Earl Nightingale"
  },
  {
    "quote": "The glow of one warm thought is to me worth more than money.",
    "author": "Thomas Jefferson"
  },
  {
    "quote": "The power of imagination makes us infinite.",
    "author": "John Muir"
  },
  {
    "quote": "Try to be a rainbow in someone’s cloud.",
    "author": "Maya Angelou"
  },
  {
    "quote": "I dwell in possibility.",
    "author": "Emily Dickinson"
  },
  {
    "quote": "A No. 2 pencil and a dream can take you anywhere.",
    "author": "Joyce Meyer"
  },
  {
    "quote": "In a gentle way, you can shake the world.",
    "author": "Mahatma Gandhi"
  },
  {
    "quote": "Follow your bliss and the universe will open doors where there were only walls.",
    "author": "Joseph Campbell"
  },
  {
    "quote": "Each day provides its own gifts.",
    "author": "Marcus Aurelius"
  },
  {
    "quote": "Creativity is intelligence having fun.",
    "author": "Albert Einstein"
  },
  {
    "quote": "People who are crazy enough to think they can change the world, are the ones who do.",
    "author": "Rob Siltanen"
  },
  {
    "quote": "Imagine your life is perfect in every respect; what would it look like?",
    "author": "Brian Tracy"
  },
  {
    "quote": "The way to get started is to quit talking and begin doing.",
    "author": "Walt Disney"
  },
  {
    "quote": "It is always the simple that produces the marvelous.",
    "author": "Amelia Barr"
  },
  {
    "quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
    "author": "Confucius"
  },
  {
    "quote": "Everything you’ve ever wanted is on the other side of fear.",
    "author": "George Addair"
  },
  {
    "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    "quote": "Hardships often prepare ordinary people for an extraordinary destiny.",
    "author": "C.S. Lewis"
  },
  {
    "quote": "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
    "author": "Roy T. Bennett"
  },
  {
    "quote": "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
    "author": "Nelson Mandela"
  },
  {
    "quote": "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
    "author": "Paulo Coelho"
  },
  {
    "quote": "It’s not whether you get knocked down. It’s whether you get up.",
    "author": "Vince Lombardi"
  },
  {
    "quote": "Your true success in life begins only when you make the commitment to become excellent at what you do.",
    "author": "Brian Tracy"
  },
  {
    "quote": "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.",
    "author": "Wayne Dyer"
  },
  {
    "quote": "Your mental and physical health come first. Everything else is secondary.",
    "author": "Zat Rana"
  },
  {
    "quote": "Less is almost always more. Simplicity is almost always the answer.",
    "author": "Zat Rana"
  },
  {
    "quote": "You have to be lucky to be successful, but luck can be engineered.",
    "author": "Zat Rana"
  },
  {
    "quote": "It all starts and ends in the mind. The most crucial skill is how you think.",
    "author": "Zat Rana"
  },
  {
    "quote": "People suck. But if you’re kind, you’ll get the best out of even the worst.",
    "author": "Zat Rana"
  },
  {
    "quote": "Perfection only exists in the mind. It’s not real. Imagine, create, improve.",
    "author": "Zat Rana"
  },
  {
    "quote": "The world doesn’t need more noise. Don’t complain. Set an example.",
    "author": "Zat Rana"
  },
  {
    "quote": "Struggle is a part of life. Learning to struggle well is a reward in itself.",
    "author": "Zat Rana"
  },
  {
    "quote": "Your attention is the most important asset you have. Be deliberate with it.",
    "author": "Zat Rana"
  },
  {
    "quote": "The goal of an ideal partner isn’t to complete you. It’s to augment you.",
    "author": "Zat Rana"
  },
  {
    "quote": "Who you let into your life is a vital decision. Don’t leave it up to chance.",
    "author": "Zat Rana"
  },
  {
    "quote": "The purpose of life isn’t to do or to accomplish. It’s to merely experience.",
    "author": "Zat Rana"
  },
  {
    "quote": "Everything is approximate. Don’t aim to be right. Aim to be less wrong.",
    "author": "Zat Rana"
  },
  {
    "quote": "It’s better to not have an opinion than to blindly follow someone else’s.",
    "author": "Zat Rana"
  },
  {
    "quote": "For the world to put you down, it first needs you to give it permission.",
    "author": "Zat Rana"
  },
  {
    "quote": "The more things you care about, the less meaningful caring becomes.",
    "author": "Zat Rana"
  },
  {
    "quote": "Be kind to yourself in the face of failures. They really don’t define you.",
    "author": "Zat Rana"
  },
  {
    "quote": "Don’t take too much pride in your accomplishments. They’re not all yours.",
    "author": "Zat Rana"
  },
  {
    "quote": "Life is short. Don’t tolerate bullsh*t. Don’t wait until it’s too late.",
    "author": "Zat Rana"
  },
  {
    "quote": "It’s true that some people have more innate talent. But talent isn’t enough.",
    "author": "Zat Rana"
  },
  {
    "quote": "There is no such thing as fairness, and dwelling on it creates despair.",
    "author": "Zat Rana"
  },
  {
    "quote": "If you want to achieve greatness stop asking for permission.",
    "author": "Anonymous"
  },
  {
    "quote": "Things work out best for those who make the best of how things work out.",
    "author": "John Wooden"
  },
  {
    "quote": "To live a creative life, we must lose our fear of being wrong.",
    "author": "Anonymous"
  },
  {
    "quote": "If you are not willing to risk the usual you will have to settle for the ordinary.",
    "author": "Jim Rohn"
  },
  {
    "quote": "Trust because you are willing to accept the risk, not because it’s safe or certain.",
    "author": "Anonymous"
  },
  {
    "quote": "All our dreams can come true if we have the courage to pursue them.",
    "author": "Walt Disney"
  },
  {
    "quote": "Good things come to people who wait, but better things come to those who go out and get them.",
    "author": "Anonymous"
  },
  {
    "quote": "If you do what you always did, you will get what you always got.",
    "author": "Anonymous"
  },
  {
    "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
    "author": "Winston Churchill"
  },
  {
    "quote": "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
    "author": "Proverb"
  },
  {
    "quote": "Successful entrepreneurs are givers and not takers of positive energy.",
    "author": "Anonymous"
  },
  {
    "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "author": "Dr. Seuss"
  },
  {
    "quote": "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.",
    "author": "Vaibhav Shah"
  },
  {
    "quote": "Don’t be afraid to give up the good to go for the great.",
    "author": "John D. Rockefeller"
  },
  {
    "quote": "The distance between insanity and genius is measured only by success.",
    "author": "Bruce Feirstein"
  },
  {
    "quote": "Don’t raise your voice, improve your argument.",
    "author": "Anonymous"
  },
  {
    "quote": "What seems to us as bitter trials are often blessings in disguise.",
    "author": "Oscar Wilde"
  },
  {
    "quote": "Do one thing every day that scares you.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "What’s the point of being alive if you don’t at least try to do something remarkable.",
    "author": "Anonymous"
  },
  {
    "quote": "Life is not about finding yourself. Life is about creating yourself.",
    "author": "Lolly Daskal"
  },
  {
    "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "author": "Ralph Waldo Emerson"
  },
  {
    "quote": "It is never too late to be what you might have been.",
    "author": "George Eliot"
  },
  {
    "quote": "Innovation distinguishes between a leader and a follower.",
    "author": "Steve Jobs"
  },
  {
    "quote": "In three words I can sum up everything I've learned about life: it goes on.",
    "author": "Robert Frost"
  },
  {
    "quote": "It does not matter how slowly you go, so long as you do not stop.",
    "author": "Confucius"
  },
  {
    "quote": "We are still masters of our fate. We are still captains of our souls.",
    "author": "Winston Churchill"
  },
  {
    "quote": "The best way out is always through.",
    "author": "Robert Frost"
  },
  {
    "quote": "Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.",
    "author": "Samuel Smiles"
  },
  {
    "quote": "Enthusiasm is the energy and force that builds literal momentum of the human soul and mind.",
    "author": "Bryant McGill"
  },
  {
    "quote": "Sometimes thinking too much can destroy your momentum.",
    "author": "Tom Watson"
  },
  {
    "quote": "Work spares us from three evils: boredom, vice, and need.",
    "author": "Voltaire"
  },
  {
    "quote": "Fortune favors the brave.",
    "author": "Publius Terence"
  },
  {
    "quote": "Strong lives are motivated by dynamic purposes.",
    "author": "Kenneth Hildebrand"
  },
  {
    "quote": "Either write something worth reading or do something worth writing.",
    "author": "Benjamin Franklin"
  },
  {
    "quote": "If the wind will not serve, take to the oars.",
    "author": "Latin Proverb"
  },
  {
    "quote": "There are no traffic jams along the extra mile.",
    "author": "Roger Staubach"
  },
  {
    "quote": "Too many of us are not living our dreams because we are living our fears.",
    "author": "Les Brown"
  },
  {
    "quote": "Challenges are what make life interested and overcoming them is what makes life meaningful.",
    "author": "Joshua J. Marine"
  },
  {
    "quote": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    "author": "Leonardo da Vinci"
  },
  {
    "quote": "Start where you are. Use what you have. Do what you can.",
    "author": "Arthur Ashe"
  },
  {
    "quote": "Happiness is not something ready made. It comes from your own actions.",
    "author": "Dalai Lama"
  },
  {
    "quote": "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    "author": "Tony Robbins"
  },
  {
    "quote": "If you are offered a seat on a rocket ship, don’t ask what seat! Just get on.",
    "author": "Sheryl Sandberg"
  },
  {
    "quote": "The question isn’t who is going to let me; it’s who is going to stop me.",
    "author": "Ayn Rand"
  },
  {
    "quote": "Always work hard. Intensity clarifies. It creates not only momentum, but also the pressure you need to feel either friction, or fulfillment.",
    "author": "Marcus Buckingham"
  },
  {
    "quote": "We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
    "author": "Aristotle"
  },
  {
    "quote": "Take calculated risks. That is quite different from being rash.",
    "author": "George S. Patton"
  },
  {
    "quote": "In every difficult situation is potential value. Believe this, then begin looking for it.",
    "author": "Norman Vincent Peale"
  },
  {
    "quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    "author": "Henry Ford"
  },
  {
    "quote": "Accept responsibly for your life. Know that it is you who will get you where you want to go, no one else.",
    "author": "Les Brown"
  },
  {
    "quote": "You cannot plough a field by turning it over in your mind.",
    "author": "Anonymous"
  },
  {
    "quote": "The world is wide, and I will not waste my life in friction when it could be turned into momentum.",
    "author": "Frances E. Willard"
  },
  {
    "quote": "Believe with all of your heat that you will do what you were made to do.",
    "author": "Orison Swett Marden"
  },
  {
    "quote": "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "author": "William B. Sprague"
  },
  {
    "quote": "If you have the guts to keep making mistakes, your wisdom and intelligence leap forward with huge momentum.",
    "author": "Holly Near"
  },
  {
    "quote": "Good things come to those who wait but greater things come to those who get off their ass and do anything to make it happen.",
    "author": "Anonymous"
  },
  {
    "quote": "Ask and it will be given to you; search and you will find; knock and the door will be opened for you.",
    "author": "Jesus"
  },
  {
    "quote": "People often say that motivation doesn’t last. Well, neither does bathing and that is why we recommend it daily.",
    "author": "Zig Ziglar"
  },
  {
    "quote": "I can, therefore I am.",
    "author": "Simone Weil"
  },
  {
    "quote": "I’ve found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often.",
    "author": "Brian Tracy"
  },
  {
    "quote": "You need to overcome the tug of people against you as you reach for high goals.",
    "author": "George S. Patton"
  },
  {
    "quote": "To know oneself, one should assert oneself.",
    "author": "Albert Camus"
  },
  {
    "quote": "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    "author": "Mark Caine"
  },
  {
    "quote": "The most effective way to do it, is to do it.",
    "author": "Amelia Earhart"
  },
  {
    "quote": "Begin to be now what you will be hereafter.",
    "author": "William James"
  },
  {
    "quote": "Leap, and the net will appear.",
    "author": "John Burroughs"
  },
  {
    "quote": "Do your work with your whole heart, and you will succeed – there’s so little competition.",
    "author": "Elbert Hubbard"
  },
  {
    "quote": "A goal is a dream with a deadline.",
    "author": "Napoleon Hill"
  },
  {
    "quote": "Things do not happen. Things are made to happen.",
    "author": "John F. Kennedy"
  },
  {
    "quote": "Quality is not an act, it is a habit.",
    "author": "Aristotle"
  },
  {
    "quote": "The secret of getting ahead is getting started.",
    "author": "Mark Twain"
  },
  {
    "quote": "By failing to prepare, you are preparing to fail.",
    "author": "Benjamin Franklin"
  },
  {
    "quote": "Either you run the day or the day runs you.",
    "author": "Jim Rohn"
  },
  {
    "quote": "Once you choose hope, anything's possible.",
    "author": "Christopher Reeve"
  },
  {
    "quote": "Try not to become a person of success, but rather try to become a person of value.",
    "author": "Albert Einstein"
  },
  {
    "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
    "author": "Winston Churchill"
  },
  {
    "quote": "Someone is sitting in the shade today because someone planted a tree a long time ago.",
    "author": "Warren Buffett"
  },
  {
    "quote": "Don't cry because it's over, smile because it happened.",
    "author": "Dr. Seuss"
  },
  {
    "quote": "Life is short, and it is here to be lived.",
    "author": "Kate Winslet"
  },
  {
    "quote": "You can't connect the dots looking forward; you can only connect them looking backward...This approach has never let me down, and it has made all the difference in my life.",
    "author": "Steve Jobs"
  },
  {
    "quote": "Everything you can imagine is real.",
    "author": "Pablo Picasso"
  },
  {
    "quote": "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
    "author": "Jim Rohn"
  },
  {
    "quote": "Rarely have I seen a situation where doing less than the other guy is a good strategy.",
    "author": "Jimmy Spithill"
  },
  {
    "quote": "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    "author": "Barack Obama"
  },
  {
    "quote": "If you love what you do and are willing to do what it takes, it's within your reach.",
    "author": "Steve Wozniak"
  },
  {
    "quote": "In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it.",
    "author": "Jane Smiley"
  },
  {
    "quote": "Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it.",
    "author": "Charles F. Kettering"
  },
  {
    "quote": "The successful warrior is the average man, with laser-like focus.",
    "author": "Bruce Lee"
  },
  {
    "quote": "In the midst of movement and chaos, keep stillness inside of you.",
    "author": "Deepak Chopra"
  },
  {
    "quote": "Success does not consist in never making mistakes but in never making the same one a second time.",
    "author": "George Bernard Shaw"
  },
  {
    "quote": "I don't want to get to the end of my life and find that I lived just the length of it. I want to have lived the width of it as well.",
    "author": "Diane Ackerman"
  },
  {
    "quote": "As we look ahead into the next century, leaders will be those who empower others.",
    "author": "Bill Gates"
  },
  {
    "quote": "The only place where success comes before work is in the dictionary.",
    "author": "Vidal Sassoon"
  },
  {
    "quote": "It’s not what you look at that matters, it’s what you see.",
    "author": "Anonymous"
  },
  {
    "quote": "The road to success and the road to failure are almost exactly the same.",
    "author": "Colin R. Davis"
  },
  {
    "quote": "Success is liking yourself, liking what you do, and liking how you do it.",
    "author": "Maya Angelou"
  },
  {
    "quote": "A real entrepreneur is somebody who has no safety net underneath them.",
    "author": "Henry Kravis"
  },
  {
    "quote": "The function of leadership is to produce more leaders, not more followers.",
    "author": "Ralph Nader"
  },
  {
    "quote": "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    "author": "Mark Twain"
  },
  {
    "quote": "If you genuinely want something, don’t wait for it — teach yourself to be impatient.",
    "author": "Gurbaksh Chahal"
  },
  {
    "quote": "Don’t let the fear of losing be greater than the excitement of winning.",
    "author": "Robert Kiyosaki"
  },
  {
    "quote": "Motivation is what gets you started. Habit is what keeps you going.",
    "author": "Jim Ryun"
  },
  {
    "quote": "People rarely succeed unless they have fun in what they are doing.",
    "author": "Dale Carnegie"
  },
  {
    "quote": "Little minds are tamed and subdued by misfortune; but great minds rise above it.",
    "author": "Washington Irving"
  },
  {
    "quote": "Knowledge is being aware of what you can do. Wisdom is knowing when not to do it.",
    "author": "Anonymous"
  },
  {
    "quote": "You can do anything, but not everything.",
    "author": "Anonymous"
  },
  {
    "quote": "Success is most often achieved by those who don't know that failure is inevitable.",
    "author": "Coco Chanel"
  },
  {
    "quote": "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    "author": "Ray Goforth"
  },
  {
    "quote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    "author": "Albert Einstein"
  },
  {
    "quote": "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success.",
    "author": "Swami Vivekananda"
  },
  {
    "quote": "You only live once, but if you do it right, once is enough.",
    "author": "Mae West"
  },
  {
    "quote": "Opportunities don't happen. You create them.",
    "author": "Chris Grosser"
  },
  {
    "quote": "You miss 100 percent of the shots you don't take.",
    "author": "Wayne Gretzky"
  },
  {
    "quote": "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    "author": "Dolly Parton"
  },
  {
    "quote": "The longer I live, the more beautiful life becomes.",
    "author": "Frank Lloyd Wright"
  },
  {
    "quote": "Success is the sum of small efforts, repeated day-in and day-out.",
    "author": "Robert Collier"
  },
  {
    "quote": "Things work out best for those who make the best of how things work out.",
    "author": "John Wooden"
  },
  {
    "quote": "A dream doesn't become reality through magic; it takes sweat, determination, and hard work.",
    "author": "Colin Powell"
  },
  {
    "quote": "If you always do what interests you, at least one person is pleased.",
    "author": "Katharine Hepburn"
  },
  {
    "quote": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor...Explore. Dream. Discover.",
    "author": "Mark Twain"
  },
  {
    "quote": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "author": "Steve Jobs"
  },
  {
    "quote": "Don't be afraid to give up the good to go for the great.",
    "author": "John D. Rockefeller"
  },
  {
    "quote": "Only put off until tomorrow what you are willing to die having left undone.",
    "author": "Pablo Picasso"
  },
  {
    "quote": "Though no one can go back and make a brand-new start, anyone can start from now and make a brand-new ending.",
    "author": "Carl Bard"
  },
  {
    "quote": "We become what we think about most of the time, and that's the strangest secret.",
    "author": "Earl Nightingale"
  },
  {
    "quote": "The biggest risk is not taking any risk...In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    "author": "Mark Zuckerberg"
  },
  {
    "quote": "Don't worry about failure; you only have to be right once.",
    "author": "Drew Houston"
  },
  {
    "quote": "Nothing great was ever achieved without enthusiasm.",
    "author": "Ralph Waldo Emerson"
  },
  {
    "quote": "Keep your face to the sunshine and you can never see the shadow.",
    "author": "Helen Keller"
  },
  {
    "quote": "The only place where success comes before work is in the dictionary.",
    "author": "Vidal Sassoon"
  },
  {
    "quote": "The more you praise and celebrate your life, the more there is in life to celebrate.",
    "author": "Oprah Winfrey"
  },
  {
    "quote": "All progress takes place outside the comfort zone.",
    "author": "Michael John Bobak"
  },
  {
    "quote": "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    "author": "Mark Caine"
  },
  {
    "quote": "I avoid looking forward or backward, and try to keep looking upward.",
    "author": "Charlotte Bronte"
  },
  {
    "quote": "One of the greatest diseases is to be nobody to anybody.",
    "author": "Mother Teresa"
  },
  {
    "quote": "Your time is limited, so don’t waste it living someone else’s life.",
    "author": "Steve Jobs"
  },
  {
    "quote": "Setting goals is the first step in turning the invisible into visible.",
    "author": "Tony Robbins"
  },
  {
    "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "author": "Emelia Earhart"
  },
  {
    "quote": "Courage is grace under pressure.",
    "author": "Ernest Hemingway"
  },
  {
    "quote": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "author": "Jim Rohn"
  },
  {
    "quote": "There is no easy walk to freedom anywhere, and many of us will have to pass through the valley of the shadow of death again and again before we reach the mountaintop of our desires.",
    "author": "Nelson Mandela"
  },
  {
    "quote": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    "author": "Charles Darwin"
  },
  {
    "quote": "The best and most beautiful things in the world cannot be seen or even touched -- they must be felt with the heart.",
    "author": "Helen Keller"
  },
  {
    "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "The best revenge is massive success.",
    "author": "Frank Sinatra"
  },
  {
    "quote": "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    "author": "David Brinkley"
  },
  {
    "quote": "May you live every day of your life.",
    "author": "Jonathan Swift"
  },
  {
    "quote": "The difference between winning and losing is most often not quitting.",
    "author": "Walt Disney"
  },
  {
    "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "author": "Mahatma Gandhi"
  },
  {
    "quote": "I have not failed. I've just found 10,000 ways that won't work.",
    "author": "Thomas Edison"
  },
  {
    "quote": "When you cease to dream you cease to live.",
    "author": "Malcolm Forbes"
  },
  {
    "quote": "No one can make you feel inferior without your consent.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "Failure is another steppingstone to greatness.",
    "author": "Oprah Winfrey"
  },
  {
    "quote": "Identity is a prison you can never escape, but the way to redeem your past is not to run from it, but to try to understand it, and use it as a foundation to grow.",
    "author": "Jay-Z"
  },
  {
    "quote": "When I dare to be powerful - to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    "author": "Audre Lorde"
  },
  {
    "quote": "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    "author": "Dale Carnegie"
  },
  {
    "quote": "If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!",
    "author": "T. Harv Eker"
  },
  {
    "quote": "If you don’t design your own life plan, chances are you’ll fall into someone else’s plan. And guess what they have planned for you? Not much.",
    "author": "Jim Rohn"
  },
  {
    "quote": "The number one reason people fail in life is because they listen to their friends, family, and neighbors.",
    "author": "Napoleon Hill"
  },
  {
    "quote": "There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul.",
    "author": "Ella Wheeler Wilcox"
  },
  {
    "quote": "You must expect great things of yourself before you can do them.",
    "author": "Michael Jordan"
  },
  {
    "quote": "Our greatest fear should not be of failure but of succeeding at things in life that don’t really matter.",
    "author": "Francis Chan"
  },
  {
    "quote": "In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it.",
    "author": "Jane Smiley"
  },
  {
    "quote": "I don’t want to get to the end of my life and find that I lived just the length of it. I want to have lived the width of it as well.",
    "author": "Diane Ackerman"
  },
  {
    "quote": "Success is...knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.",
    "author": "John C. Maxwell"
  },
  {
    "quote": "Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.",
    "author": "Wayne Dyer"
  },
  {
    "quote": "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.",
    "author": "George Lorimer"
  },
  {
    "quote": "To be successful you must accept all challenges that come your way. You can’t just accept the ones you like.",
    "author": "Mike Gafka"
  },
  {
    "quote": "Real difficulties can be overcome; it is only the imaginary ones that are unconquerable.",
    "author": "Theodore N. Vail"
  },
  {
    "quote": "Failure is the condiment that gives success its flavor.",
    "author": "Truman Capote"
  },
  {
    "quote": "Don’t let what you cannot do interfere with what you can do.",
    "author": "John R. Wooden"
  },
  {
    "quote": "It is better to fail in originality than to succeed in imitation.",
    "author": "Herman Melville"
  },
  {
    "quote": "Fortune sides with him who dares.",
    "author": "Virgil"
  },
  {
    "quote": "You may have to fight a battle more than once to win it.",
    "author": "Margaret Thatcher"
  },
  {
    "quote": "It's not the size of the dog in the fight, but the size of the fight in the dog",
    "author": "Archie Griffen"
  },
  {
    "quote": "Nothing lasts forever. Not even your troubles.",
    "author": "Arnold H. Glasgow"
  },
  {
    "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    "author": "Albert Einstein"
  },
  {
    "quote": "Where hope grows, miracles blossom.",
    "author": "Elna Rae"
  },
  {
    "quote": "To accomplish great things, we must not only act, but also dream, not only plan, but also believe.",
    "author": "Anatole France"
  },
  {
    "quote": "You measure the size of the accomplishment by the obstacles you had to overcome to reach your goals.",
    "author": "Booker T. Washington"
  },
  {
    "quote": "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    "author": "Dale Carnegie"
  },
  {
    "quote": "Take chances, make mistakes. That's how you grow. Pain nourishes your courage. You have to fail in order to practice being brave",
    "author": "Mary Tyler Moore"
  },
  {
    "quote": "Being strong means rejoicing in who you are, complete with imperfections",
    "author": "Margaret Woodhouse"
  },
  {
    "quote": "A life spent making mistakes is not only more honorable but more useful than a life spent doing nothing",
    "author": "George Bernard Shaw"
  },
  {
    "quote": "If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you’re always in the same place",
    "author": "Nora Roberts"
  },
  {
    "quote": "It took me a long time not to judge myself through someone else's eyes",
    "author": "Sally Field"
  },
  {
    "quote": "Make the most of yourself, for that is all there is of you",
    "author": "Ralph Waldo Emerson"
  },
  {
    "quote": "Awards become corroded, friends gather no dust",
    "author": "Jesse Owens"
  },
  {
    "quote": "Hope never abandons you, you abandon it",
    "author": "George Weinberg"
  },
  {
    "quote": "Nothing splendid has ever been achieved except by those who dared believe that something inside of them was superior to circumstance",
    "author": "Bruce Barton"
  },
  {
    "quote": "I quit being afraid when my first venture failed and the sky didn't fall down",
    "author": "Allen H. Neuharth"
  },
  {
    "quote": "Life is 10% of what happens to me and 90% of how I react to it",
    "author": "John Maxwell"
  },
  {
    "quote": "Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much may be done if we are always doing.",
    "author": "Thomas Jefferson"
  },
  {
    "quote": "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway",
    "author": "Mary Kay Ash"
  },
  {
    "quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "author": "Marilyn Monroe"
  },
  {
    "quote": "A room without books is like a body without a soul.",
    "author": "Marcus Tullius Cicero"
  },
  {
    "quote": "Be the change that you wish to see in the world.",
    "author": "Mahatma Gandhi"
  },
  {
    "quote": "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.",
    "author": "Albert Camus"
  },
  {
    "quote": "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.",
    "author": "Nathaniel Hawthorne"
  },
  {
    "quote": "Sometimes you can't see yourself clearly until you see yourself through the eyes of others.",
    "author": "Ellen DeGeneres"
  },
  {
    "quote": "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    "author": "Henry Ford"
  },
  {
    "quote": "If you're going through hell, keep going.",
    "author": "Winston Churchill"
  },
  {
    "quote": "To me, business isn't about wearing suits or pleasing stockholders. It's about being true to yourself, your ideas and focusing on the essentials.",
    "author": "Richard Branson"
  },
  {
    "quote": "In order to be irreplaceable one must always be different.",
    "author": "Coco Chanel"
  },
  {
    "quote": "If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve.",
    "author": "Jeff Bezos"
  },
  {
    "quote": "If you can't explain it simply, you don't understand it well enough.",
    "author": "Albert Einstein"
  },
  {
    "quote": "You can't please everyone, and you can't make everyone like you.",
    "author": "Katie Couric"
  },
  {
    "quote": "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    "author": "Neil Armstrong"
  },
  {
    "quote": "The two most important days in your life are the day you are born and the day you find out why.",
    "author": "Mark Twain"
  },
  {
    "quote": "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.",
    "author": "Audrey Hepburn"
  },
  {
    "quote": "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.",
    "author": "Thomas J. Watson"
  },
  {
    "quote": "If your actions inspire others to dream more, learn more, do more, and become more, you are a leader.",
    "author": "John Quincy Adams"
  },
  {
    "quote": "You may only succeed if you desire succeeding; you may only fail if you do not mind failing.",
    "author": "Philippos"
  },
  {
    "quote": "I find that the harder I work, the more luck I seem to have.",
    "author": "Thomas Jefferson"
  },
  {
    "quote": "It often requires more courage to dare to do right than to fear to do wrong.",
    "author": "Abraham Lincoln"
  },
  {
    "quote": "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.",
    "author": "Martha Stewart"
  },
  {
    "quote": "Success does not consist in never making mistakes but in never making the same one a second time.",
    "author": "George Bernard Shaw"
  },
  {
    "quote": "Knowledge is being aware of what you can do. Wisdom is knowing when not to do it.",
    "author": "Anonymous"
  },
  {
    "quote": "You can do anything, but not everything.",
    "author": "Anonymous"
  },
  {
    "quote": "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    "author": "Ray Goforth"
  },
  {
    "quote": "Things work out best for those who make the best of how things work out.",
    "author": "John Wooden"
  },
  {
    "quote": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "author": "Jim Rohn"
  },
  {
    "quote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    "author": "Albert Einstein"
  },
  {
    "quote": "Opportunities don't happen. You create them.",
    "author": "Chris Grosser"
  },
  {
    "quote": "There is no easy walk to freedom anywhere, and many of us will have to pass through the valley of the shadow of death again and again before we reach the mountaintop of our desires.",
    "author": "Nelson Mandela"
  },
  {
    "quote": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    "author": "Charles Darwin"
  },
  {
    "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    "author": "David Brinkley"
  },
  {
    "quote": "No one can make you feel inferior without your consent.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    "author": "Mary Kay Ash"
  },
  {
    "quote": "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    "author": "Dr. Seuss"
  },
  {
    "quote": "Keep your eyes on the stars and your feet on the ground.",
    "author": "Theodore Roosevelt"
  },
  {
    "quote": "The only person you should try to be better than is the person you were yesterday.",
    "author": "Anonymous"
  },
  {
    "quote": "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    "author": "Harvey Fierstein"
  },
  {
    "quote": "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
    "author": "Sador, Children of Húrin"
  },
  {
    "quote": "Life's too mysterious to take too serious.",
    "author": "Mary Engelbreit"
  },
  {
    "quote": "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
    "author": "Albert Einstein"
  },
  {
    "quote": "There isn't a way things should be. There's just what happens, and what we do.",
    "author": "Terry Pratchett, A Hat Full of Sky"
  },
  {
    "quote": "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
    "author": "Rocky Balboa, Rocky"
  },
  {
    "quote": "If you want to go fast, go alone. If you want to go far, go together.",
    "author": "African proverb"
  },
  {
    "quote": "Believe you can and you're halfway there.",
    "author": "T. Roosevelt"
  },
  {
    "quote": "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
    "author": "Jose Luis Borges"
  },
  {
    "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "author": "Ralph Waldo Emerson"
  },
  {
    "quote": "Life isn’t about getting and having, it’s about giving and being.",
    "author": "Kevin Kruse"
  },
  {
    "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
    "author": "Napoleon Hill"
  },
  {
    "quote": "Strive not to be a success, but rather to be of value.",
    "author": "Albert Einstein"
  },
  {
    "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    "author": "Robert Frost"
  },
  {
    "quote": "I attribute my success to this: I never gave or took any excuse.",
    "author": "Florence Nightingale"
  },
  {
    "quote": "You miss 100% of the shots you don’t take.",
    "author": "Wayne Gretzky"
  },
  {
    "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    "author": "Michael Jordan"
  },
  {
    "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "author": "Amelia Earhart"
  },
  {
    "quote": "Every strike brings me closer to the next home run.",
    "author": "Babe Ruth"
  },
  {
    "quote": "Definiteness of purpose is the starting point of all achievement.",
    "author": "W. Clement Stone"
  },
  {
    "quote": "We must balance conspicuous consumption with conscious capitalism.",
    "author": "Kevin Kruse"
  },
  {
    "quote": "Life is what happens to you while you’re busy making other plans.",
    "author": "John Lennon"
  },
  {
    "quote": "We become what we think about.",
    "author": "Earl Nightingale"
  },
  {
    "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    "author": "Mark Twain"
  },
  {
    "quote": "Life is 10% what happens to me and 90% of how I react to it.",
    "author": "Charles Swindoll"
  },
  {
    "quote": "The most common way people give up their power is by thinking they don’t have any.",
    "author": "Alice Walker"
  },
  {
    "quote": "The mind is everything. What you think you become.",
    "author": "Buddha"
  },
  {
    "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
    "author": "Chinese Proverb"
  },
  {
    "quote": "An unexamined life is not worth living.",
    "author": "Socrates"
  },
  {
    "quote": "Eighty percent of success is showing up.",
    "author": "Woody Allen"
  },
  {
    "quote": "Your time is limited, so don’t waste it living someone else’s life.",
    "author": "Steve Jobs"
  },
  {
    "quote": "Winning isn’t everything, but wanting to win is.",
    "author": "Vince Lombardi"
  },
  {
    "quote": "I am not a product of my circumstances. I am a product of my decisions.",
    "author": "Stephen Covey"
  },
  {
    "quote": "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    "author": "Pablo Picasso"
  },
  {
    "quote": "You can never cross the ocean until you have the courage to lose sight of the shore.",
    "author": "Christopher Columbus"
  },
  {
    "quote": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "author": "Maya Angelou"
  },
  {
    "quote": "Either you run the day, or the day runs you.",
    "author": "Jim Rohn"
  },
  {
    "quote": "Whether you think you can or you think you can’t, you’re right.",
    "author": "Henry Ford"
  },
  {
    "quote": "The two most important days in your life are the day you are born and the day you find out why.",
    "author": "Mark Twain"
  },
  {
    "quote": "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    "author": "Johann Wolfgang von Goethe"
  },
  {
    "quote": "The best revenge is massive success.",
    "author": "Frank Sinatra"
  },
  {
    "quote": "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
    "author": "Zig Ziglar"
  },
  {
    "quote": "Life shrinks or expands in proportion to one’s courage.",
    "author": "Anais Nin"
  },
  {
    "quote": "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
    "author": "Vincent Van Gogh"
  },
  {
    "quote": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    "author": "Aristotle"
  },
  {
    "quote": "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    "author": "Jesus"
  },
  {
    "quote": "The only person you are destined to become is the person you decide to be.",
    "author": "Ralph Waldo Emerson"
  },
  {
    "quote": "Go confidently in the direction of your dreams.  Live the life you have imagined.",
    "author": "Henry David Thoreau"
  },
  {
    "quote": "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
    "author": "Erma Bombeck"
  },
  {
    "quote": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    "author": "Booker T. Washington"
  },
  {
    "quote": "Certain things catch your eye, but pursue only those that capture the heart.",
    "author": " Ancient Indian Proverb"
  },
  {
    "quote": "Believe you can and you’re halfway there.",
    "author": "Theodore Roosevelt"
  },
  {
    "quote": "Everything you’ve ever wanted is on the other side of fear.",
    "author": "George Addair"
  },
  {
    "quote": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    "author": "Plato"
  },
  {
    "quote": "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
    "author": "Maimonides"
  },
  {
    "quote": "Start where you are. Use what you have.  Do what you can.",
    "author": "Arthur Ashe"
  },
  {
    "quote": "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    "author": "John Lennon"
  },
  {
    "quote": "Fall seven times and stand up eight.",
    "author": "Japanese Proverb"
  },
  {
    "quote": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    "author": "Helen Keller"
  },
  {
    "quote": "Everything has beauty, but not everyone can see.",
    "author": "Confucius"
  },
  {
    "quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    "author": "Anne Frank"
  },
  {
    "quote": "When I let go of what I am, I become what I might be.",
    "author": "Lao Tzu"
  },
  {
    "quote": "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    "author": "Maya Angelou"
  },
  {
    "quote": "Happiness is not something readymade.  It comes from your own actions.",
    "author": "Dalai Lama"
  },
  {
    "quote": "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
    "author": "Sheryl Sandberg"
  },
  {
    "quote": "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    "author": "Aristotle"
  },
  {
    "quote": "If the wind will not serve, take to the oars.",
    "author": "Latin Proverb"
  },
  {
    "quote": "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
    "author": "Unknown"
  },
  {
    "quote": "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    "author": "Marie Curie"
  },
  {
    "quote": "Too many of us are not living our dreams because we are living our fears.",
    "author": "Les Brown"
  },
  {
    "quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "author": "Joshua J. Marine"
  },
  {
    "quote": "If you want to lift yourself up, lift up someone else.",
    "author": "Booker T. Washington"
  },
  {
    "quote": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    "author": "Leonardo da Vinci"
  },
  {
    "quote": "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    "author": "Jamie Paolinetti"
  },
  {
    "quote": "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    "author": "Erica Jong"
  },
  {
    "quote": "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    "author": "Bob Dylan"
  },
  {
    "quote": "I didn’t fail the test. I just found 100 ways to do it wrong.",
    "author": "Benjamin Franklin"
  },
  {
    "quote": "In order to succeed, your desire for success should be greater than your fear of failure.",
    "author": "Bill Cosby"
  },
  {
    "quote": "A person who never made a mistake never tried anything new.",
    "author": " Albert Einstein"
  },
  {
    "quote": "The person who says it cannot be done should not interrupt the person who is doing it.",
    "author": "Chinese Proverb"
  },
  {
    "quote": "There are no traffic jams along the extra mile.",
    "author": "Roger Staubach"
  },
  {
    "quote": "It is never too late to be what you might have been.",
    "author": "George Eliot"
  },
  {
    "quote": "You become what you believe.",
    "author": "Oprah Winfrey"
  },
  {
    "quote": "I would rather die of passion than of boredom.",
    "author": "Vincent van Gogh"
  },
  {
    "quote": "A truly rich man is one whose children run into his arms when his hands are empty.",
    "author": "Unknown"
  },
  {
    "quote": "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
    "author": "Ann Landers"
  },
  {
    "quote": "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    "author": "Abigail Van Buren"
  },
  {
    "quote": "Build your own dreams, or someone else will hire you to build theirs.",
    "author": "Farrah Gray"
  },
  {
    "quote": "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
    "author": "Jesse Owens"
  },
  {
    "quote": "Education costs money.  But then so does ignorance.",
    "author": "Sir Claus Moser"
  },
  {
    "quote": "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    "author": "Rosa Parks"
  },
  {
    "quote": "It does not matter how slowly you go as long as you do not stop.",
    "author": "Confucius"
  },
  {
    "quote": "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    "author": "Oprah Winfrey"
  },
  {
    "quote": "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    "author": "Dalai Lama"
  },
  {
    "quote": "You can’t use up creativity.  The more you use, the more you have.",
    "author": "Maya Angelou"
  },
  {
    "quote": "Dream big and dare to fail.",
    "author": "Norman Vaughan"
  },
  {
    "quote": "Our lives begin to end the day we become silent about things that matter.",
    "author": "Martin Luther King Jr."
  },
  {
    "quote": "Do what you can, where you are, with what you have.",
    "author": "Teddy Roosevelt"
  },
  {
    "quote": "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    "author": "Tony Robbins"
  },
  {
    "quote": "Dreaming, after all, is a form of planning.",
    "author": "Gloria Steinem"
  },
  {
    "quote": "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
    "author": "Mae Jemison"
  },
  {
    "quote": "You may be disappointed if you fail, but you are doomed if you don’t try.",
    "author": "Beverly Sills"
  },
  {
    "quote": "Remember no one can make you feel inferior without your consent.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "Life is what we make it, always has been, always will be.",
    "author": "Grandma Moses"
  },
  {
    "quote": "The question isn’t who is going to let me; it’s who is going to stop me.",
    "author": "Ayn Rand"
  },
  {
    "quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    "author": "Henry Ford"
  },
  {
    "quote": "It’s not the years in your life that count. It’s the life in your years.",
    "author": "Abraham Lincoln"
  },
  {
    "quote": "Change your thoughts and you change your world.",
    "author": "Norman Vincent Peale"
  },
  {
    "quote": "Either write something worth reading or do something worth writing.",
    "author": "Benjamin Franklin"
  },
  {
    "quote": "Nothing is impossible, the word itself says, “I’m possible!”",
    "author": "Audrey Hepburn"
  },
  {
    "quote": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs"
  },
  {
    "quote": "If you can dream it, you can achieve it.",
    "author": "Zig Ziglar"
  }
]

export default data