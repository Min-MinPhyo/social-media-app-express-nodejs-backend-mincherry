// import { IconButton, ButtonGroup, Button } from "@mui/material";
// import {
//   Favorite as LikedIcon,
//   FavoriteBorder as LikeIcon,
// } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useApp, queryClient } from "../ThemedApp";
// import { useMutation } from "react-query";
// import {
//   postPostLike,
//   deletePostLike,
//   postCommentLike,
//   deleteCommentLike,
// } from "../libs/fetcher";
// export default function LikeButton({ item, comment }) {
//   const navigate = useNavigate();
//   const { auth } = useApp();
//   function isLiked() {
//     if (!auth) return false;
//     if (!item.likes) return false;
//     return item.likes.find((like) => like.userId == auth.id);
//   }
//   const likePost = useMutation((id) => postPostLike(id), {
//     onSuccess: () => {
//       queryClient.refetchQueries("posts");
//       queryClient.refetchQueries("comments");
//     },
//   });
//   const likeComment = useMutation((id) => postCommentLike(id), {
//     onSuccess: () => {
//       queryClient.refetchQueries("comments");
//     },
//   });
//   const unlikePost = useMutation((id) => deletePostLike(id), {
//     onSuccess: () => {
//       queryClient.refetchQueries("posts");
//       queryClient.refetchQueries("comments");
//     },
//   });
//   const unlikeComment = useMutation((id) => deleteCommentLike(id), {
//     onSuccess: () => {
//       queryClient.refetchQueries("comments");
//     },
//   });
//   return (
//     <ButtonGroup>
//       {isLiked() ? (
//         <IconButton
//           size="small"
//           onClick={(e) => {
//             comment
//               ? unlikeComment.mutate(item.id)
//               : unlikePost.mutate(item.id);
//             e.stopPropagation();
//           }}
//         >
//           <LikedIcon fontSize="small" color="error" />
//         </IconButton>
//       ) : (
//         <IconButton
//           size="small"
//           onClick={(e) => {
//             comment ? likeComment.mutate(item.id) : likePost.mutate(item.id);
//             e.stopPropagation();
//           }}
//         >
//           <LikeIcon fontSize="small" color="error" />
//         </IconButton>
//       )}
//       <Button
//         onClick={(e) => {
//           if (comment) {
//             navigate(`/likes/${item.id}/comment`);
//           } else {
//             navigate(`/likes/${item.id}/post`);
//           }
//           e.stopPropagation();
//         }}
//         sx={{ color: "text.fade" }}
//         variant="text"
//         size="small"
//       >
//         {item.likes ? item.likes.length : 0}
//       </Button>
//     </ButtonGroup>
//   );
// }



// // 
// import {
//   Alert,
//   Avatar,
//   Box,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemButton,
//   ListItemSecondaryAction,
//   ListItemText,
//      TextField,
//  } from "@mui/material";
 
//  import { useState } from "react";
//  import { useQuery } from "react-query";
 
//  import { fetchSearch } from "../libs/fetcher";
//  import FollowButton from "../components/FollowButton";
 
//  import { useDebounce } from "@uidotdev/usehooks";
//  import { useNavigate } from "react-router-dom";
 
//  export default function Search() {
//   const [query, setQuery] = useState("");
//   const debouncedQuery = useDebounce(query, 500);
 
//   const navigate = useNavigate();
 
//   const { isLoading, isError, error, data } = useQuery(
//    ["search", debouncedQuery],
//    () => {
//     return fetchSearch(debouncedQuery);
//    }
//   );
 
//   if (isError) {
//    return (
//     <Box>
//      <Alert severity="warning">{error.message}</Alert>
//     </Box>
//    );
//   }
 
//   return (
//    <Box>
//     <TextField
//      fullWidth={true}
//      variant="outlined"
//      placeholder="Search user"
//      onKeyUp={e => {
//       setQuery(e.target.value);
//      }}
//     />
//     {isLoading ? (
//      <Box sx={{ textAlign: "center", mt: 4 }}>Loading...</Box>
//     ) : (
//      <List>
//       {data.map(user => {
//        return (
//         <ListItem key={user.id}>
//          <ListItemButton
//           onClick={() =>
//            navigate(`/profile/${user.id}`)
//           }>
//           <ListItemAvatar>
//            <Avatar />
//           </ListItemAvatar>
//           <ListItemText
//            primary={user.name}
//            secondary={user.bio}
//           />
//           <ListItemSecondaryAction>
//            <FollowButton user={user} />
//           </ListItemSecondaryAction>
//          </ListItemButton>
//         </ListItem>
//        );
//       })}
//      </List>
//     )}
//    </Box>
//   );
//  }
 